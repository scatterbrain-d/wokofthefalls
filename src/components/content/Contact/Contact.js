import React from "react";

const contact = () => (
                    <div className="contact">
                        <form action="https://formspree.io/andy.finnell@gmail.com" method="POST">
                            <h4>Use this form to send us a message.</h4>
                            <div>
                                <label id="name">Name: </label>
                                <input id="name" type="text" name="name" placeholder="your name"/>
                            </div>
                            <div>
                                <label id="email">Email: </label>
                                <input id="email" type="email" name="email" placeholder="your email"/>                                
                            </div>
                            <textarea name="content" placeholder="enter comment here"></textarea>
                            <div><button type="submit">Submit</button></div>
                        </form>
                    </div>

);

export default contact;