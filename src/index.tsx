import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoListPage from './pages/TodoListPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoListPage />
  </React.StrictMode>
);
