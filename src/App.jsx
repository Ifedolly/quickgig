import React from 'react';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true,    // Animation only happens once
    });
  }, []);
  
  //Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return
  }

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
  }

  //Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return
  }
  
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <MainLayout/>, //Wraps the pages
      children: [
        {
          index: true, //Default route for this path
          element: <HomePage/> //renders HomePage
        },
        {
          path: "/jobs", //New route for JobsPage
          element: <JobsPage/> //Renders JobsPage at /jobs
        },
        {
          path: "/add-job", 
          element: <AddJobPage addJobSubmit={addJob}/>, 
        },
        {
          path: "/edit-job/:id", 
          element: <EditJobPage updateJobSubmit={updateJob}/>,
          loader : jobLoader
        },
        {
          path: "/jobs/:id", 
          element: <JobPage deleteJob={deleteJob}/>,
          loader : jobLoader
        },
        {
          path: "*", //Catch error exception
          element: <NotFoundPage/> //Renders NotFoundPage in case of an error
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>
};


export default App


