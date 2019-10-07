import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const PageContainer = (props) => {
    if (props.mobile === false) {
        return (
            <div className="page-container">
                {props.routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={1000}
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
        );
    } else {
        return (
            <>
                {props.routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={1000}
                                classNames="page"
                                unmountOnExit>
                                <div className="page">
                                    <Component mobile={props.mobile} />
                                </div>
                            </CSSTransition>
                        )}
                    </Route>
                ))}
            </>
        );
    }
}

export default PageContainer;