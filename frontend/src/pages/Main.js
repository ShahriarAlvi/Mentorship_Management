import './Main.css';
import ChatApp from '../Components/ChatBox/ChatApp';
import Sidebar from '../Components/Sidebar/Sidebar'

export const Main = () => {
    return (
        <div className="hero">
          <div className="hero-text">
            <h1>Learn and grow with help from world-class mentors for free</h1>
            <p>
              Book and meet over 20,524+ mentors for 1:1 mentorship in our global
              community.
            </p>
          </div>
          <div className="hero-search">
            <input type="text" placeholder="Search by company, language or role" />
            <select>
              <option value="">Expertise</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Product Management">Product Management</option>
              <option value="Marketing">Marketing</option>
            </select>
            <select>
              <option value="">Country</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
            </select>
            <button>Search</button>
          </div>

          <div> <ChatApp />

          </div>

          <div> 
            <Sidebar />
          </div>

          
        </div>
      
    )
}