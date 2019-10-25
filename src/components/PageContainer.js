import React from 'react';
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

const PageContainer = (props) => (
    <>
        {props.routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
                {({ match }) => (
                    <CSSTransition
                        in={match != null}
                        timeout={500}
                        classNames="page"
                        unmountOnExit>
                        <div className="page-container">
                            <Component mobile={props.mobile} />
                        </div>
                    </CSSTransition>
                )}
            </Route>
        ))}
    </>
);

export default PageContainer;