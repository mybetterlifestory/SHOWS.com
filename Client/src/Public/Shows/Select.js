import React from 'react';
import { Button} from 'react-bootstrap';


function Select(props) {
    return (
        <div className="StorBy">
            <div >
                <b>Search by Show Name:</b><br />
                <input type="search" /><br /><br />
                <b>Show Status:</b><br />
                <select>
                    <option value=""></option>
                    <option value="running">Running</option>
                    <option value="ended">Ended</option>
                    <option value="tobedetermined">To Be Determined</option>
                    <option value="inDevelopment">In Development</option>
                </select><br /><br />
                <b>Genre:</b><br />
                <select>
                    <option value=""></option>
                    <option value="action">Action</option>
                    <option value="adult">Adult</option>
                    <option value="anime">Anime</option>
                    <option value="children">Children </option>
                    <option value="comedy">Comedy</option>
                    <option value="DIY">DIY</option>
                    <option value="drama">Drama</option>
                    <option value="espionage">Espionage</option>
                    <option value="family">Family</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="food">Food</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="legal">Legal</option>
                    <option value="medical">Medical</option>
                    <option value="music">Music</option>
                    <option value="mystery">Horror</option>
                    <option value="nature">Nature</option>
                    <option value="romance">Romance</option>
                    <option value="science-fiction">Science-Fiction</option>
                    <option value="sports">Sports</option>
                    <option value="supernatural">Supernatural</option>
                    <option value="thriller">Thriller</option>
                    <option value="war">War</option>
                    <option value="western">Western</option>
                </select><br /><br />
                <b>Rating:</b><br />
                <select>
                    <option value=""> </option>
                    <option value="two">+2</option>
                    <option value="three">+3</option>
                    <option value="four">+4</option>
                    <option value="five">+5</option>
                    <option value="six">+6</option>
                    <option value="seven">+7</option>
                    <option value="eight">+8</option>
                    <option value="nine">+9</option>
                </select><br /><br />
                <b>Sort by:</b><br />
                <select>
                    <option value="mostPopular">Most popular</option>
                    <option value="highest-rating">Highest Rating</option>
                    <option value="lowest-rating">Lowest rating</option>
                    <option value="A-to-Z">A to Z</option>
                    <option value="Z-to-A">Z to A</option>
                    <option value="mostRecentlyAdded">Most recently added</option>
                    <option value="leasttRecentlyAdded">Least recently added</option>
                    <option value="mostFollowed">Most Followed</option>
                </select><br /><br />
                <Button className="btn btn-secondary">Search</Button>
            </div>
        </div>
    );
}

export default Select;