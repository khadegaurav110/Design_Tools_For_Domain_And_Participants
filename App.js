import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Registration from './Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from './ForgotPassword';
import Systemrti from './systemrti';
import Systemrti1 from './Systemrti1';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectName from './ProjectName';
import Project from './Project';
import Openproject from './Openproject';
import Library from './Library';
import Nav from './Nav';
import Youtubenav from './Youtubenav';

function App() {
  return (
    <>
			<BrowserRouter>
				<Routes>
				
					<Route path="/login" element={<Login />} />
					<Route path='/registration' element={<Registration/>}/>
					<Route path='/forgot' element={<ForgotPassword/>}/>
					<Route path='/systemrti' element={<Systemrti/>}/>
					<Route path='/systemrti1' element={<Systemrti1/>}/>
					<Route path='/pro' element={<Project/>}/>
					<Route path='/project' element={<ProjectName/>}/>
					<Route path='/openproject' element={<Openproject/>}/>
					<Route path='/nav' element={<Nav/>}/>
					<Route path='/youtubenav' element={<Youtubenav/>}/>

					<Route path='/library' element={<Library/>}/>

								
				</Routes>
			</BrowserRouter>
		
		</>
  );
}

export default App;
