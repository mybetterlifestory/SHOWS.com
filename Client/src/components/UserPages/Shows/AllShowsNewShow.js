import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { creacteDashShow } from '../../../features/dashShows/dashShowsSlice';

function AllShowsNewShow({closeAddShow}) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        showId: 0,
        showName: "",
        showGenres: [],
        showStatus: "",
        // showPremiered: [],
        // showEnded: [],
        // showRating: [],
        showSummary: "",
        // showImage: "",
    });

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(creacteDashShow(formData));
        setFormData((prevState) => ({
            ...prevState,
        }))
        closeAddShow()
    }

    const cancel = () => {
        closeAddShow()
    }

    return (
        <div className="AddingNew">
            <h3>Adding New Show</h3>
            <Form onSubmit={onSubmit} >
                <div>
                    <Label>Enter Show ID:</Label>
                    <Input type="text" name="showId" placeholder="Show ID" onChange={onChange} />
                </div>
                <div>
                    <Label>Enter Show Name:</Label>
                    <Input type="text" name="showName" placeholder="Show Name" onChange={onChange} />
                </div>
                <div>
                    <Label>Enter Show Genres:</Label>
                    <Input type="array" name="showGenres" placeholder="Show Genres" onChange={onChange} />
                </div>
                <div>
                    <Label>Choose Show Status:</Label>
                    <Input type="select" name="showStatus" onChange={onChange}>
                        <option value="choose"></option>
                        <option value="running">Running</option>
                        <option value="ended">Ended</option>
                    </Input>
                </div>
                {/* <div>
                    <Label>Show Premiered Date:</Label>&nbsp;&nbsp;
                    <Input type="date" name="showPremiered" onChange={onChange} />
                </div> */}
                {/* <div>
                    <Label>Show Ended Date:</Label>
                    <Input type="date" name="showEnded" onChange={onChange} />
                </div> */}
                {/* <div>
                    <Label>Enter Show Rating:</Label>
                    <Input type="number" name="showRating" placeholder="Show Rating" onChange={onChange} />
                </div> */}
                <div>
                    <Label>Enter Show Summery:</Label>
                    <Input type="textarea" name="showSummary" placeholder="Show Summery" onChange={onChange} />
                </div>
                {/* <div>
                    <Label>Upload Image:</Label>
                    <Input type="file" name="showImage" onChange={onChange} />
                </div> */}
                <Button type="submit">Add The Show</Button>&nbsp;&nbsp;
                <Button onClick={cancel}>Cancel</Button>
            </Form>
        </div>
    );
}

export default AllShowsNewShow;