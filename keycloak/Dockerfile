FROM jboss/keycloak

ADD import-frontend.json /opt/jboss/keycloak/

CMD ["-b", "0.0.0.0", "-Dkeycloak.import=/opt/jboss/keycloak/import-frontend.json"]