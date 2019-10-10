import React from 'react';
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const PageContainer = (props) => (
    <>
        <div id="page-container" className="page-container">
            {props.routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={500}
                            classNames="page"
                            unmountOnExit>
                            <div className="page">
                                <Component mobile={props.mobile} />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </div>
    </>
);

export default PageContainer;