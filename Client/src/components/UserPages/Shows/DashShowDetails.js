import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { updateDashShow, deleteDashShow } from '../../../features/dashShows/dashShowsSlice';

function DashShowDetails(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        id: data._id,
        showId: data.showId,
        showName: data.name,
        showGenres: data.genres,
        showStatus: data.status,
        showPremiered: data.premiered,
        showEnded: data.ended,
        showRating: data.rating,
        showSummary: data.summary,
        showImage: data.image,
    });


    const onClick = () => {
        setEdit(current => !current);
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const show = formData;
        dispatch(updateDashShow(show));
        setEdit(current => !current);
        setFormData((prevState) => ({
            ...prevState,
        }))
    }

    const deleteShow = async () => {
        const id = formData.id;
        dispatch(deleteDashShow(id));
        //נשמר מידע של הסדרה לפניי...
        setEdit(current => !current);
    }

    const cancel = () => {
        setEdit(current => !current)
    }

    useEffect(() => {
    }, [edit]);

    return (
        <div className="dashItem">
            <div className="SpaceBetween">
                <h5>{data.name}</h5>
                <Button onClick={onClick}>Edit Show</Button>
            </div>
            <div>
                {edit === true && (
                    <div className="AddingNew">
                        <h3>Edit {data.name}</h3>
                        <Form onSubmit={onSubmit} >
                            <div>
                                <Label>Show ID:</Label>
                                <Input type="text" name="showId" value={data.showId} onChange={onChange} />
                            </div>
                            <div>
                                <Label>Show Name:</Label>
                                <Input type="text" name="showName" defaultValue={data.name} onChange={onChange} />
                            </div>
                            <div>
                                <Label>Show Genres:</Label>
                                <Input type="text" name="showGenres" defaultValue={data.genres} onChange={onChange} />
                            </div>
                            <div>
                                <Label>Show Status:</Label>
                                <Input type="select" name="showStatus" select={data.status} onChange={onChange}>
                                    <option value="running">Running</option>
                                    <option value="ended">Ended</option>
                                </Input>
                            </div>
                            {/* <div>
                                <Label>Premiered Date:</Label>&nbsp;&nbsp;
                                <Input type="date" name="showPremiered" value={data.premiered} onChange={onChange} />
                            </div>
                            <div>
                                <Label>Ended Date:</Label>&nbsp;&nbsp;
                                <Input type="date" name="showEnded" defaultValue={data.ended} onChange={onChange} />
                            </div> */}
                            {/* <div>
                                <Label>Show Rating:</Label>
                                <Input type="text" name="showRating" defaultValue={data.rating[0].average} onChange={onChange} />
                            </div> */}
                            <div>
                                <Label>Show Summery:</Label>
                                <Input type="textarea" name="showSummary" defaultValue={data.summary} onChange={onChange} />
                            </div>
                            {/* <div>
                                <Label>Image:</Label>
                                <Input type="text" name="showImage" defaultValue={data.image[0].medium} onChange={onChange} />
                            </div> */}
                            <Button type="submit">Update Show</Button>&nbsp;&nbsp;
                            <Button onClick={deleteShow}>Delete Show</Button>&nbsp;&nbsp;
                            <Button onClick={cancel}>Cancel</Button>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashShowDetails;