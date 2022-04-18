import { Header } from "../header";

export function Contact(props) {
    return (
        <section id="contact" className="page-section">
        <Header name="Contact" value="Contact"/>
        <address>
            <form>
                <div>
                <label>
                    Name: <input type="text" name="name" required></input>
                </label>
                </div>

               <div>
               <label>
                    Email: <input type="email" name="email" required></input>
                </label>
               </div>
                <div>
                <label>
                    Message: <textarea name="message" required></textarea>

                </label> 
                </div>
               <label>
                   <div>&nbsp;</div>
                <input type="submit" value="send"></input>
               </label>
            </form>

            <div>
                <div className='address_item'>
                    <div><strong>Phone: </strong></div>
                    <div><a href='tel:5555551234'>555-555-1234</a></div>
                </div>
                <div className='address_item'>
                    <div><strong>Email: </strong></div>
                    <div><a href='tel:5555551234'><a href="mailto:aubrey.crook@gmail.com">aubrey.crook@gmail.com </a></a></div>
                </div>
            
            
            </div>
        </address>
    </section>
    )
}