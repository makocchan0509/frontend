import React, {useEffect, useState} from 'react';
import Alert from 'react-bootstrap/Alert'

import KeycloakState from "./KeycloakState";

import Keycloak from 'keycloak-js';
import UserInfo from "./UserInfo";
import Logout from "./Logout";
import RouteService from "./RouteService";
import Button from 'react-bootstrap/Button';

const Secured: React.FC = () => {

    const keycloak = Keycloak('/keycloak.json');
    const [keycloakState, setKeycloakState] = useState<KeycloakState>({keycloak: null, authenticated: false});

    useEffect(() => {
        keycloak.init({onLoad: 'login-required'})
            .then((authenticated) => {
                setKeycloakState({keycloak: keycloak, authenticated: authenticated});
            });
    }, []);

    if (keycloakState.keycloak !== null) {
        if (keycloakState.authenticated) {
            return (
                <div>
                    <Alert variant="success">
                        <Alert.Heading>Authenticated</Alert.Heading>
                    </Alert>
                    <UserInfo keycloakState={keycloakState}/>
                    <Button variant="outline-info" onClick={() => RouteService("second")}>Second Service</Button>
                    <Button variant="outline-info" onClick={() => RouteService("third")}>Third Service</Button>
                    <Logout keycloakState={keycloakState}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert variant="danger">
                        <Alert.Heading>Unable to authenticate</Alert.Heading>
                    </Alert>
                </div>
            )
        }
    }

    return (
        <div>
            <p>Initializing Keycloak...</p>
        </div>
    );
};

export default Secured;