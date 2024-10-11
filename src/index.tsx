import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoListPage from './pages/TodoListPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import TodoViewModel from './viewmodels/TodoViewModel';
import { TodoViewModelType } from './@types/TodoViewModelType';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <TodoListPage />
  </React.StrictMode>
);
