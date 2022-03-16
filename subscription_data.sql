-- init data of subscripciones in database

-- ACTUALIZADOR 
-- "https://alas.com.co/documentos/1Actualizar_219/Actualizar_ALAS3240_Act219.zip"
-- "https://alas.com.co/documentos/2Actualizar_218/Actualizar_ALAS3240_Act218.zip" 
-- "https://alas.com.co/documentos/3Actualizar_217/Actualizar_ALAS3240_Act217.exe"

-- INSTALADOR 
-- "https://alas.com.co/documentos/Instalar/Instalar_ALAS3240_Act219.zip"

USE alasdb;
INSERT INTO Subscription(name, description) VALUES ('A', 'Gold');
INSERT INTO Subscription(name, description) VALUES ('B', 'Plat');
INSERT INTO Subscription(name, description) VALUES ('C', 'Bronce');


INSERT INTO Route(path) VALUES ('https://alas.com.co/documentos/1Actualizar_219/Actualizar_ALAS3240_Act219.zip');
INSERT INTO Route(path) VALUES ('https://alas.com.co/documentos/2Actualizar_218/Actualizar_ALAS3240_Act218.zip');
INSERT INTO Route(path) VALUES ('https://alas.com.co/documentos/3Actualizar_217/Actualizar_ALAS3240_Act217.exe');
INSERT INTO Route(path) VALUES ('https://alas.com.co/documentos/Instalar/Instalar_ALAS3240_Act219.zip');

INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (1, 1);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (1, 2);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (1, 3);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (2, 4);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (3, 1);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (3, 2);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (3, 3);
INSERT INTO SubscriptionRoute(subscription_id, route_id) VALUES (3, 4);
