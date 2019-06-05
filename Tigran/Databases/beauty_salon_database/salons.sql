--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

-- Started on 2019-06-05 17:48:35

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

DROP DATABASE varsaviranocner;
--
-- TOC entry 2909 (class 1262 OID 16516)
-- Name: varsaviranocner; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE varsaviranocner WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


ALTER DATABASE varsaviranocner OWNER TO postgres;

\connect varsaviranocner

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

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16519)
-- Name: beauty_salons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.beauty_salons (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    address character varying(70) NOT NULL,
    phone character varying(15) NOT NULL,
    email character varying(100) NOT NULL,
    photo character varying(700) NOT NULL
);


ALTER TABLE public.beauty_salons OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16517)
-- Name: beauty_salons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.beauty_salons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.beauty_salons_id_seq OWNER TO postgres;

--
-- TOC entry 2910 (class 0 OID 0)
-- Dependencies: 196
-- Name: beauty_salons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.beauty_salons_id_seq OWNED BY public.beauty_salons.id;


--
-- TOC entry 208 (class 1259 OID 16663)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer,
    worker_id integer,
    date date NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16661)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 2911 (class 0 OID 0)
-- Dependencies: 207
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 198 (class 1259 OID 16536)
-- Name: prof; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prof (
    name character varying(50) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.prof OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16588)
-- Name: prof_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prof_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prof_id_seq OWNER TO postgres;

--
-- TOC entry 2912 (class 0 OID 0)
-- Dependencies: 203
-- Name: prof_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prof_id_seq OWNED BY public.prof.id;


--
-- TOC entry 204 (class 1259 OID 16597)
-- Name: prof_worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prof_worker (
    prof_id integer,
    worker_id integer
);


ALTER TABLE public.prof_worker OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16572)
-- Name: salon_worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.salon_worker (
    salon_id integer,
    worker_id integer
);


ALTER TABLE public.salon_worker OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16610)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    name character varying(20) NOT NULL,
    surname character varying(30) NOT NULL,
    birthdate date NOT NULL,
    email character varying(355) NOT NULL,
    photo character varying(500) NOT NULL,
    gender character varying(6) NOT NULL,
    phone character varying(15) NOT NULL,
    login character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    id integer NOT NULL,
    CONSTRAINT gender CHECK ((((gender)::text = 'Famale'::text) OR ((gender)::text = 'Male'::text)))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16623)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 2913 (class 0 OID 0)
-- Dependencies: 206
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 209 (class 1259 OID 16679)
-- Name: work_worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.work_worker (
    work_id integer NOT NULL,
    worker_id integer NOT NULL,
    "time" real NOT NULL,
    price real NOT NULL
);


ALTER TABLE public.work_worker OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16542)
-- Name: worker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.worker (
    id integer NOT NULL,
    name character varying(15) NOT NULL,
    suraname character varying(30) NOT NULL,
    brdh_date date NOT NULL,
    email character varying(100) NOT NULL,
    photo character varying(700) NOT NULL,
    about character varying(700) NOT NULL,
    rating numeric,
    phone character varying(15) NOT NULL,
    CONSTRAINT worker_rating_check CHECK ((rating < (5)::numeric))
);


ALTER TABLE public.worker OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16540)
-- Name: worker_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.worker_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.worker_id_seq OWNER TO postgres;

--
-- TOC entry 2914 (class 0 OID 0)
-- Dependencies: 199
-- Name: worker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.worker_id_seq OWNED BY public.worker.id;


--
-- TOC entry 210 (class 1259 OID 16694)
-- Name: working_time; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.working_time (
    worker_id integer NOT NULL,
    working_days character varying(100) NOT NULL,
    working_hours integer,
    CONSTRAINT working_time_working_hours_check CHECK ((working_hours < 12))
);


ALTER TABLE public.working_time OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16556)
-- Name: works_images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.works_images (
    id integer,
    path character varying(700) NOT NULL
);


ALTER TABLE public.works_images OWNER TO postgres;

--
-- TOC entry 2733 (class 2604 OID 16522)
-- Name: beauty_salons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beauty_salons ALTER COLUMN id SET DEFAULT nextval('public.beauty_salons_id_seq'::regclass);


--
-- TOC entry 2739 (class 2604 OID 16666)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 2734 (class 2604 OID 16590)
-- Name: prof id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof ALTER COLUMN id SET DEFAULT nextval('public.prof_id_seq'::regclass);


--
-- TOC entry 2737 (class 2604 OID 16625)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 2735 (class 2604 OID 16545)
-- Name: worker id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker ALTER COLUMN id SET DEFAULT nextval('public.worker_id_seq'::regclass);


--
-- TOC entry 2742 (class 2606 OID 16531)
-- Name: beauty_salons beauty_salons_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beauty_salons
    ADD CONSTRAINT beauty_salons_email_key UNIQUE (email);


--
-- TOC entry 2744 (class 2606 OID 16529)
-- Name: beauty_salons beauty_salons_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beauty_salons
    ADD CONSTRAINT beauty_salons_phone_key UNIQUE (phone);


--
-- TOC entry 2746 (class 2606 OID 16533)
-- Name: beauty_salons beauty_salons_photo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beauty_salons
    ADD CONSTRAINT beauty_salons_photo_key UNIQUE (photo);


--
-- TOC entry 2748 (class 2606 OID 16527)
-- Name: beauty_salons beauty_salons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beauty_salons
    ADD CONSTRAINT beauty_salons_pkey PRIMARY KEY (id);


--
-- TOC entry 2770 (class 2606 OID 16683)
-- Name: work_worker id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.work_worker
    ADD CONSTRAINT id PRIMARY KEY (work_id, worker_id);


--
-- TOC entry 2768 (class 2606 OID 16668)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 2750 (class 2606 OID 16592)
-- Name: prof prof_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof
    ADD CONSTRAINT prof_pkey PRIMARY KEY (id);


--
-- TOC entry 2760 (class 2606 OID 16617)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 2762 (class 2606 OID 16660)
-- Name: users users_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_key UNIQUE (id);


--
-- TOC entry 2764 (class 2606 OID 16621)
-- Name: users users_login_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_login_key UNIQUE (login);


--
-- TOC entry 2766 (class 2606 OID 16619)
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- TOC entry 2752 (class 2606 OID 16553)
-- Name: worker worker_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_email_key UNIQUE (email);


--
-- TOC entry 2754 (class 2606 OID 16555)
-- Name: worker worker_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_phone_key UNIQUE (phone);


--
-- TOC entry 2756 (class 2606 OID 16551)
-- Name: worker worker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.worker
    ADD CONSTRAINT worker_pkey PRIMARY KEY (id);


--
-- TOC entry 2772 (class 2606 OID 16699)
-- Name: working_time working_time_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.working_time
    ADD CONSTRAINT working_time_pkey PRIMARY KEY (worker_id);


--
-- TOC entry 2758 (class 2606 OID 16563)
-- Name: works_images works_images_path_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works_images
    ADD CONSTRAINT works_images_path_key UNIQUE (path);


--
-- TOC entry 2778 (class 2606 OID 16669)
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 2779 (class 2606 OID 16674)
-- Name: orders orders_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- TOC entry 2776 (class 2606 OID 16600)
-- Name: prof_worker prof_worker_prof_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof_worker
    ADD CONSTRAINT prof_worker_prof_id_fkey FOREIGN KEY (prof_id) REFERENCES public.prof(id);


--
-- TOC entry 2777 (class 2606 OID 16605)
-- Name: prof_worker prof_worker_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof_worker
    ADD CONSTRAINT prof_worker_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- TOC entry 2774 (class 2606 OID 16575)
-- Name: salon_worker salon_worker_salon_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon_worker
    ADD CONSTRAINT salon_worker_salon_id_fkey FOREIGN KEY (salon_id) REFERENCES public.beauty_salons(id);


--
-- TOC entry 2775 (class 2606 OID 16580)
-- Name: salon_worker salon_worker_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.salon_worker
    ADD CONSTRAINT salon_worker_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- TOC entry 2780 (class 2606 OID 16684)
-- Name: work_worker work_worker_work_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.work_worker
    ADD CONSTRAINT work_worker_work_id_fkey FOREIGN KEY (work_id) REFERENCES public.orders(id);


--
-- TOC entry 2781 (class 2606 OID 16689)
-- Name: work_worker work_worker_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.work_worker
    ADD CONSTRAINT work_worker_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- TOC entry 2782 (class 2606 OID 16700)
-- Name: working_time working_time_worker_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.working_time
    ADD CONSTRAINT working_time_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES public.worker(id);


--
-- TOC entry 2773 (class 2606 OID 16564)
-- Name: works_images works_images_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works_images
    ADD CONSTRAINT works_images_id_fkey FOREIGN KEY (id) REFERENCES public.worker(id);


-- Completed on 2019-06-05 17:48:36

--
-- PostgreSQL database dump complete
--

