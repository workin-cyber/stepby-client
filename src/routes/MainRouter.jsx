import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserName from '../pages/user/UserName'
import Login from '../pages/user/LoginPage'
import Verification from '../pages/user/Verification'
import BusinessCategory from '../pages/user/BusinessCategory'
import BusinessName from '../pages/user/BusinessName'
import Setting from '../pages/user/Setting'
import HomeProject from '../pages/home/HomeProject'
import HomeTemplate from '../pages/home/HomeTemplate'
import Project from './../pages/common/Project'
import Step from './../pages/project/BExample2'
import StepEdit from '../pages/template/StepEdit'

function MainRouter() {

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/verification' element={<Verification />} />
            <Route path='/user-name' element={<UserName />} />
            <Route path='/business-name' element={<BusinessName />} />
            <Route path='/business-category' element={<BusinessCategory />} />
            <Route path='/setting' element={<Setting />} />

            <Route path='/projects' element={<HomeProject />} />
            <Route path='/templates' element={<HomeTemplate />} />

            <Route path='/template/:id'  >
                <Route index element={<Project mode="template" />} />
                <Route path='step/:stepId' element={<Step />} />
                <Route path='edit-step/:stepId' element={<StepEdit />} />
            </Route>

            <Route path='project'>
                <Route path='biz'>
                    <Route path=':id'  >
                        <Route index element={<Project mode="biz" />} />
                        <Route path='step/:stepId' element={<Step />} />
                        <Route path='edit-step/:stepId' element={<StepEdit />} />
                    </Route>
                </Route>
            </Route>

            <Route path='project/client'>
                <Route path=':id'  >
                    <Route index element={<Project mode="client" />} />
                    <Route path='step/:stepId' element={<Step />} />
                </Route>
            </Route>

            <Route path='*' element={<></>} />
        </Routes>
    )
}
export default MainRouter
