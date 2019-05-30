--
-- PostgreSQL database dump
--

-- Dumped from database version 10.8
-- Dumped by pg_dump version 10.8

-- Started on 2019-05-30 18:24:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2930 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 214 (class 1259 OID 16877)
-- Name: communication; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.communication (
    worker_id integer NOT NULL,
    storage_id integer NOT NULL
);


ALTER TABLE public.communication OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16793)
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    address character varying(50) NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(35) NOT NULL,
    web_page character varying(30)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16791)
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customers_id_seq OWNER TO postgres;

--
-- TOC entry 2931 (class 0 OID 0)
-- Dependencies: 206
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- TOC entry 211 (class 1259 OID 16823)
-- Name: entrance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entrance (
    id integer NOT NULL,
    date_time timestamp without time zone NOT NULL,
    product integer NOT NULL,
    producer integer NOT NULL,
    quantity double precision NOT NULL,
    price double precision NOT NULL,
    storage integer NOT NULL,
    reciver integer NOT NULL
);


ALTER TABLE public.entrance OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16821)
-- Name: entrance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entrance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entrance_id_seq OWNER TO postgres;

--
-- TOC entry 2932 (class 0 OID 0)
-- Dependencies: 210
-- Name: entrance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entrance_id_seq OWNED BY public.entrance.id;


--
-- TOC entry 213 (class 1259 OID 16851)
-- Name: exit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exit (
    id integer NOT NULL,
    date_time timestamp without time zone NOT NULL,
    product integer NOT NULL,
    customer integer NOT NULL,
    quantity double precision NOT NULL,
    price double precision NOT NULL,
    storage integer NOT NULL,
    sender integer NOT NULL
);


ALTER TABLE public.exit OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16849)
-- Name: exit_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exit_id_seq OWNER TO postgres;

--
-- TOC entry 2933 (class 0 OID 0)
-- Dependencies: 212
-- Name: exit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exit_id_seq OWNED BY public.exit.id;


--
-- TOC entry 201 (class 1259 OID 16756)
-- Name: points; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.points (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE public.points OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16754)
-- Name: points_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.points_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.points_id_seq OWNER TO postgres;

--
-- TOC entry 2934 (class 0 OID 0)
-- Dependencies: 200
-- Name: points_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.points_id_seq OWNED BY public.points.id;


--
-- TOC entry 205 (class 1259 OID 16781)
-- Name: producers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producers (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    address character varying(50) NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(35) NOT NULL,
    web_page character varying(30) NOT NULL
);


ALTER TABLE public.producers OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16779)
-- Name: producers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.producers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.producers_id_seq OWNER TO postgres;

--
-- TOC entry 2935 (class 0 OID 0)
-- Dependencies: 204
-- Name: producers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.producers_id_seq OWNED BY public.producers.id;


--
-- TOC entry 209 (class 1259 OID 16805)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    measurement_unit integer NOT NULL,
    expire_date date NOT NULL,
    unit_weight double precision NOT NULL,
    unit_volume double precision NOT NULL,
    unit_medium_price double precision NOT NULL,
    production_date date NOT NULL,
    producer integer NOT NULL
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16803)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 2936 (class 0 OID 0)
-- Dependencies: 208
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 215 (class 1259 OID 16890)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    producer_id integer NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16748)
-- Name: staff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staff (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE public.staff OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16746)
-- Name: staff_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.staff_id_seq OWNER TO postgres;

--
-- TOC entry 2937 (class 0 OID 0)
-- Dependencies: 198
-- Name: staff_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.staff_id_seq OWNED BY public.staff.id;


--
-- TOC entry 197 (class 1259 OID 16738)
-- Name: storage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.storage (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    address character varying(50) NOT NULL,
    volume double precision NOT NULL,
    workinghoursstart time without time zone NOT NULL,
    workinghoursend time without time zone NOT NULL
);


ALTER TABLE public.storage OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16736)
-- Name: storage_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.storage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.storage_id_seq OWNER TO postgres;

--
-- TOC entry 2938 (class 0 OID 0)
-- Dependencies: 196
-- Name: storage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.storage_id_seq OWNED BY public.storage.id;


--
-- TOC entry 203 (class 1259 OID 16764)
-- Name: workers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workers (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    surname character varying(20),
    birth_date date NOT NULL,
    address character varying(50) NOT NULL,
    phone character varying(20) NOT NULL,
    email character varying(35) NOT NULL,
    salary double precision NOT NULL,
    staff integer NOT NULL
);


ALTER TABLE public.workers OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16762)
-- Name: workers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.workers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.workers_id_seq OWNER TO postgres;

--
-- TOC entry 2939 (class 0 OID 0)
-- Dependencies: 202
-- Name: workers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.workers_id_seq OWNED BY public.workers.id;


--
-- TOC entry 2731 (class 2604 OID 16796)
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- TOC entry 2733 (class 2604 OID 16826)
-- Name: entrance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrance ALTER COLUMN id SET DEFAULT nextval('public.entrance_id_seq'::regclass);


--
-- TOC entry 2734 (class 2604 OID 16854)
-- Name: exit id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exit ALTER COLUMN id SET DEFAULT nextval('public.exit_id_seq'::regclass);


--
-- TOC entry 2728 (class 2604 OID 16759)
-- Name: points id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.points ALTER COLUMN id SET DEFAULT nextval('public.points_id_seq'::regclass);


--
-- TOC entry 2730 (class 2604 OID 16784)
-- Name: producers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producers ALTER COLUMN id SET DEFAULT nextval('public.producers_id_seq'::regclass);


--
-- TOC entry 2732 (class 2604 OID 16808)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 2727 (class 2604 OID 16751)
-- Name: staff id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff ALTER COLUMN id SET DEFAULT nextval('public.staff_id_seq'::regclass);


--
-- TOC entry 2726 (class 2604 OID 16741)
-- Name: storage id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.storage ALTER COLUMN id SET DEFAULT nextval('public.storage_id_seq'::regclass);


--
-- TOC entry 2729 (class 2604 OID 16767)
-- Name: workers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers ALTER COLUMN id SET DEFAULT nextval('public.workers_id_seq'::regclass);


--
-- TOC entry 2921 (class 0 OID 16877)
-- Dependencies: 214
-- Data for Name: communication; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2914 (class 0 OID 16793)
-- Dependencies: 207
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2918 (class 0 OID 16823)
-- Dependencies: 211
-- Data for Name: entrance; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2920 (class 0 OID 16851)
-- Dependencies: 213
-- Data for Name: exit; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2908 (class 0 OID 16756)
-- Dependencies: 201
-- Data for Name: points; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2912 (class 0 OID 16781)
-- Dependencies: 205
-- Data for Name: producers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2916 (class 0 OID 16805)
-- Dependencies: 209
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2922 (class 0 OID 16890)
-- Dependencies: 215
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2906 (class 0 OID 16748)
-- Dependencies: 199
-- Data for Name: staff; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.staff (id, name) VALUES (1, 'director');
INSERT INTO public.staff (id, name) VALUES (2, 'builder');
INSERT INTO public.staff (id, name) VALUES (3, 'driver');
INSERT INTO public.staff (id, name) VALUES (4, 'accountant');
INSERT INTO public.staff (id, name) VALUES (5, 'mechanic');


--
-- TOC entry 2904 (class 0 OID 16738)
-- Dependencies: 197
-- Data for Name: storage; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.storage (id, name, address, volume, workinghoursstart, workinghoursend) VALUES (1, 'Grocery', 'Vanadzor, Taron 4', 300, '09:00:00', '19:00:00');
INSERT INTO public.storage (id, name, address, volume, workinghoursstart, workinghoursend) VALUES (3, 'Construction', 'Vanadzor, Bazum', 600, '09:00:00', '20:00:00');


--
-- TOC entry 2910 (class 0 OID 16764)
-- Dependencies: 203
-- Data for Name: workers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.workers (id, name, surname, birth_date, address, phone, email, salary, staff) VALUES (1, 'Miqo', 'Aslikyan', '1994-06-14', 'Vanadzor,Taron 5', '+374307802', 'miqmiq@mail.ru', 350000, 1);
INSERT INTO public.workers (id, name, surname, birth_date, address, phone, email, salary, staff) VALUES (2, 'Nare', 'Stepanyan', '1990-12-26', 'Vanadzor,dimac', '+37455150245', 'nare@mail.ru', 120000, 3);


--
-- TOC entry 2940 (class 0 OID 0)
-- Dependencies: 206
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_id_seq', 1, false);


--
-- TOC entry 2941 (class 0 OID 0)
-- Dependencies: 210
-- Name: entrance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entrance_id_seq', 1, false);


--
-- TOC entry 2942 (class 0 OID 0)
-- Dependencies: 212
-- Name: exit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exit_id_seq', 1, false);


--
-- TOC entry 2943 (class 0 OID 0)
-- Dependencies: 200
-- Name: points_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.points_id_seq', 1, false);


--
-- TOC entry 2944 (class 0 OID 0)
-- Dependencies: 204
-- Name: producers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.producers_id_seq', 1, false);


--
-- TOC entry 2945 (class 0 OID 0)
-- Dependencies: 208
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 1, false);


--
-- TOC entry 2946 (class 0 OID 0)
-- Dependencies: 198
-- Name: staff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.staff_id_seq', 5, true);


--
-- TOC entry 2947 (class 0 OID 0)
-- Dependencies: 196
-- Name: storage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.storage_id_seq', 3, true);


--
-- TOC entry 2948 (class 0 OID 0)
-- Dependencies: 202
-- Name: workers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.workers_id_seq', 2, true);


--
-- TOC entry 2756 (class 2606 OID 16802)
-- Name: customers customers_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_email_key UNIQUE (email);


--
-- TOC entry 2758 (class 2606 OID 16800)
-- Name: customers customers_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_phone_key UNIQUE (phone);


--
-- TOC entry 2760 (class 2606 OID 16798)
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- TOC entry 2764 (class 2606 OID 16828)
-- Name: entrance entrance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrance
    ADD CONSTRAINT entrance_pkey PRIMARY KEY (id);


--
-- TOC entry 2766 (class 2606 OID 16856)
-- Name: exit exit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exit
    ADD CONSTRAINT exit_pkey PRIMARY KEY (id);


--
-- TOC entry 2742 (class 2606 OID 16761)
-- Name: points points_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.points
    ADD CONSTRAINT points_pkey PRIMARY KEY (id);


--
-- TOC entry 2750 (class 2606 OID 16790)
-- Name: producers producers_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producers
    ADD CONSTRAINT producers_email_key UNIQUE (email);


--
-- TOC entry 2752 (class 2606 OID 16788)
-- Name: producers producers_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producers
    ADD CONSTRAINT producers_phone_key UNIQUE (phone);


--
-- TOC entry 2754 (class 2606 OID 16786)
-- Name: producers producers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producers
    ADD CONSTRAINT producers_pkey PRIMARY KEY (id);


--
-- TOC entry 2762 (class 2606 OID 16810)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 2740 (class 2606 OID 16753)
-- Name: staff staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (id);


--
-- TOC entry 2736 (class 2606 OID 16745)
-- Name: storage storage_address_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_address_key UNIQUE (address);


--
-- TOC entry 2738 (class 2606 OID 16743)
-- Name: storage storage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.storage
    ADD CONSTRAINT storage_pkey PRIMARY KEY (id);


--
-- TOC entry 2744 (class 2606 OID 16773)
-- Name: workers workers_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers
    ADD CONSTRAINT workers_email_key UNIQUE (email);


--
-- TOC entry 2746 (class 2606 OID 16771)
-- Name: workers workers_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers
    ADD CONSTRAINT workers_phone_key UNIQUE (phone);


--
-- TOC entry 2748 (class 2606 OID 16769)
-- Name: workers workers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers
    ADD CONSTRAINT workers_pkey PRIMARY KEY (id);


--
-- TOC entry 2779 (class 2606 OID 16885)
-- Name: communication communication_storage_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communication
    ADD CONSTRAINT communication_storage_id_fkey FOREIGN KEY (storage_id) REFERENCES public.storage(id);


--
-- TOC entry 2778 (class 2606 OID 16880)
-- Name: communication communication_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communication
    ADD CONSTRAINT communication_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.workers(id);


--
-- TOC entry 2771 (class 2606 OID 16834)
-- Name: entrance entrance_producer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrance
    ADD CONSTRAINT entrance_producer_fkey FOREIGN KEY (producer) REFERENCES public.producers(id);


--
-- TOC entry 2770 (class 2606 OID 16829)
-- Name: entrance entrance_product_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrance
    ADD CONSTRAINT entrance_product_fkey FOREIGN KEY (product) REFERENCES public.product(id);


--
-- TOC entry 2773 (class 2606 OID 16844)
-- Name: entrance entrance_reciver_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrance
    ADD CONSTRAINT entrance_reciver_fkey FOREIGN KEY (reciver) REFERENCES public.workers(id);


--
-- TOC entry 2772 (class 2606 OID 16839)
-- Name: entrance entrance_storage_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrance
    ADD CONSTRAINT entrance_storage_fkey FOREIGN KEY (storage) REFERENCES public.storage(id);


--
-- TOC entry 2775 (class 2606 OID 16862)
-- Name: exit exit_customer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exit
    ADD CONSTRAINT exit_customer_fkey FOREIGN KEY (customer) REFERENCES public.customers(id);


--
-- TOC entry 2774 (class 2606 OID 16857)
-- Name: exit exit_product_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exit
    ADD CONSTRAINT exit_product_fkey FOREIGN KEY (product) REFERENCES public.product(id);


--
-- TOC entry 2777 (class 2606 OID 16872)
-- Name: exit exit_sender_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exit
    ADD CONSTRAINT exit_sender_fkey FOREIGN KEY (sender) REFERENCES public.workers(id);


--
-- TOC entry 2776 (class 2606 OID 16867)
-- Name: exit exit_storage_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exit
    ADD CONSTRAINT exit_storage_fkey FOREIGN KEY (storage) REFERENCES public.storage(id);


--
-- TOC entry 2768 (class 2606 OID 16811)
-- Name: product product_measurement_unit_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_measurement_unit_fkey FOREIGN KEY (measurement_unit) REFERENCES public.points(id);


--
-- TOC entry 2769 (class 2606 OID 16816)
-- Name: product product_producer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_producer_fkey FOREIGN KEY (producer) REFERENCES public.producers(id);


--
-- TOC entry 2780 (class 2606 OID 16893)
-- Name: products products_producer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_producer_id_fkey FOREIGN KEY (producer_id) REFERENCES public.producers(id);


--
-- TOC entry 2781 (class 2606 OID 16898)
-- Name: products products_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- TOC entry 2767 (class 2606 OID 16774)
-- Name: workers workers_staff_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workers
    ADD CONSTRAINT workers_staff_fkey FOREIGN KEY (staff) REFERENCES public.staff(id);


-- Completed on 2019-05-30 18:24:19

--
-- PostgreSQL database dump complete
--

