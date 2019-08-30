import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div className="container">
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/survey/new" className="waves-effect waves-light btn-large red">New Survey<i className="material-icons"></i></Link>
      </div>
    </div>
  );
};

export default Dashboard;

//npm install redux-form @8.1.0
