
import {  AdminNav } from '../../componets/adminComponent'
import "../adminPage/adminStylesheets/account.css"
import Layout from '../../componets/adminComponent/DashLayout/Layout'
import Potriate from "../../assets/images/potriate.png"
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


const Account = ({text}) => {
  return (
   <Layout active="Account">
     <div className='account'>
      <AdminNav text='Account'/>
    </div>
    <div className="acc">
    <h1>Account information</h1>
      <div className="invite"><p>{text = "Invite"}</p></div>
    </div>
      
      <div className="header">

        <div className="section1">
        <div className='con1'>
        <img src={Potriate} alt="" />
       <div className="txt">
       <h1>Jane Doe</h1>
        <p>Super Admin</p>
        <p>Lagos state, Nigeria</p>
       </div>
        </div>
      <div className="con2">
       <span><div><p>Edit</p></div></span>
        <div><p>Save</p></div>
      </div>
        </div>

      <div className="section2">

        <div className="name">

        <div className="name-1">
       <div><input type="text" placeholder='Jane' /></div>
      <div>  <input type="text" placeholder='Username' /></div>
       <div> <input type="number"  placeholder='Phone Number'/></div>
        </div>

        <div className="name-2">
        <div>  <input type="text"  placeholder='Doe'/></div>
        <div>  <input type="email"  placeholder='Email'/></div>
        </div>

        </div>

       <div className="address">

        <h1>Address</h1>
       <div className="label1">
      <div className="second">
      <div>
      <Select
      placeholder="Country"
      indicator={<KeyboardArrowDown />}
      sx={{
        backgroundColor:"#BEBEBE", color: "", fontSize: 16, fontFamily:"inter", fontWeight: 400,
        lineHeight: 24.2, pl:3,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="Nigeria">Nigeria</Option>
      <Option value="United States">United States</Option>
      <Option value="Algeria">Algeria</Option>
      <Option value="South africa">South Africa</Option>
    </Select>
      </div>

      <div>
    <Select
      placeholder="City"
      indicator={<KeyboardArrowDown />}
      sx={{
         backgroundColor:"#BEBEBE", color: "", fontSize: 16, fontFamily:"inter", fontWeight: 400,
         lineHeight: 24.2,  pl:3,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="ikoyi">Ikoyi</Option>
      <Option value="port harcourt">Port harcourt</Option>
      <Option value="ojodu">Ojodu</Option>
      <Option value="lekki">Lekki</Option>
    </Select>
      </div>

     <div>
     <Select className='custom-select'
      placeholder="State"
      indicator={<KeyboardArrowDown />}
      sx={{
        backgroundColor:"#BEBEBE", color: "", fontSize: 16, fontFamily:"inter", fontWeight: 400,
        lineHeight: 24.2,  pl:3,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="Rivers">Rivers</Option>
      <Option value="Akwa ibom">Akwa ibom</Option>
      <Option value="Lagos">lagos</Option>
      <Option value="Abuja">Abuja</Option>
    </Select>
     </div>

      </div>

       </div>
       </div>

      </div>
      
      </div>

   
   </Layout>
  )
}

export default Account
