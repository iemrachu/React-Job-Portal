import React from 'react';
import HomePage from './pages/HomePage';
import { jobloader } from './pages/JobPage';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';




const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(newJob), 
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Mainlayout/> }>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobloader}/>
    </Route>
  )
  )

  return (
    <RouterProvider router={router}/>
  )
};

export default App;