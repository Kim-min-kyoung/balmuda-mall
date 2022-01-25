import React from 'react';
import './notice.scss';
import Header from './Header';
import Noticelist from './NoticeList';
import NoticeView from './NoticeView';
import { Routes, Route, Link } from 'react-router-dom';
import NoticeCreate from './NoticeCreate';
import NoticeEdit from './NoticeEdit';

function index(props) {
    return (
        <div id="noticeboard">
            <Header />
            <Routes>
                <Route path="/" element={<Noticelist />} />
                <Route path=":id" element={<NoticeView />} />
                <Route path="/create" element={<NoticeCreate />} />
                <Route path=":id/edit" element={<NoticeEdit />} />
            </Routes>
        </div>
    );
}

export default index;