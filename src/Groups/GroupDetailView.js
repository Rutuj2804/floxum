import React, { useState } from 'react'
import './GroupDetailView.scss';
import GroupInternalNavigation from './GroupInternalNavigation';
import PublicIcon from '@material-ui/icons/Public';
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import ImageIcon from '@material-ui/icons/Image'
import TelegramIcon from '@material-ui/icons/Telegram'

function GroupDetailView() {

    const [input,setInput] = useState('');

    return (
        <div>
            <div className="groupDetail__ImageField">
                <div className="groupDetail__GroupImage">
                    <img src="/images/Event_listing_BG.png" alt="group" className="img-fluid"/>
                </div>
                <div className="groupDetail__Image">
                    <img src="/images/Profile_photo_place.png" alt="group-icon"/>
                    <h2>Artopher Dance</h2>
                </div>
                <div className="groupDetail__GroupName">
                    
                </div>
            </div>
            <div className="container groupDetail__Navigation my-5">
                <div className="col-lg-6 col-md-8 col-12 offset-lg-3 offset-md-4 offset-md-3">
                        <GroupInternalNavigation/>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mx-2">
                    <div className="col-lg-3 col-md-4 col-12 my-2 groupDetail__Info">
                        <div className="groupDetail__GroupInfo">
                            <h4>Contact</h4>
                            <pre><PublicIcon/>  Artopher.com</pre>
                            <pre><PhoneIcon/>  +91-654789123</pre>
                            <pre><MailIcon/>  artopher@info.com</pre>
                        </div>
                        <div className="groupDetail__About">
                            <h4>About</h4>
                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                            lorem ipsum lorem ipsum lorem ipsum </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-12 my-2">
                        <div className="groupDetail__Post">
                            <div className="groupDetail__Profile">
                                <img src="/images/Profile_photo_place.png" alt="profile" />
                                <h6>Eminem Mishra</h6>
                            </div>
                            {/* post block */}
                            <form>
                                <textarea 
                                    value={input}
                                    onChange={e=>setInput(e.target.value)}
                                    placeholder="Write Something..."
                                />
                                <input 
                                    type="file"
                                    accept="image/*"
                                    id="image"
                                />
                                <label for="image"><ImageIcon/>Photos/Videos</label>
                                <button type="submit"><TelegramIcon/> Post</button>
                            </form>
                        </div>
                        <div className="groupDetail__Explore">
                            {/* post card */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 my-2">
                        <div className="groupDetail__OtherGroups">
                            <h4 className="text-center"> Your Groups </h4>
                            <form>
                                <input
                                    type="text"
                                    className=""
                                    placeholder="Search and hit enter"
                                />
                                <button type="submit">s</button>
                            </form>
                            <div className="groupDetail__links">
                                <img src="/images/Profile_photo_place.png" alt="group" />
                                <h6>Artopher Dance</h6>
                            </div>
                            <div className="groupDetail__links">
                                <img src="/images/Profile_photo_place.png" alt="group" />
                                <h6>Artopher Music</h6>
                            </div>
                            <div className="groupDetail__links">
                                <img src="/images/Profile_photo_place.png" alt="group" />
                                <h6>Artopher Graphics</h6>
                            </div>
                            <div className="groupDetail__links">
                                <img src="/images/Profile_photo_place.png" alt="group" />
                                <h6>Artopher WebPages</h6>
                            </div>
                            <div className="groupDetail__links">
                                <img src="/images/Profile_photo_place.png" alt="group" />
                                <h6>Graphics World</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupDetailView
