toc.dat                                                                                             0000600 0004000 0002000 00000164547 13353144341 0014461 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP                           v            Patrols    9.6.10    9.6.10 �    �	           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false         �	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false         �	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false         �	           1262    16417    Patrols    DATABASE     �   CREATE DATABASE "Patrols" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "Patrols";
             postgres    false                     2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false         �	           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                     3079    12387    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false         �	           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1         �            1259    16680 	   ahwal_seq    SEQUENCE     r   CREATE SEQUENCE public.ahwal_seq
    START WITH 5
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.ahwal_seq;
       public       postgres    false    3         �            1259    16467    ahwal    TABLE     �   CREATE TABLE public.ahwal (
    ahwalid bigint DEFAULT nextval('public.ahwal_seq'::regclass) NOT NULL,
    name character varying(500)
);
    DROP TABLE public.ahwal;
       public         postgres    false    216    3         �            1259    16701    ahwalmapping_seq    SEQUENCE     }   CREATE SEQUENCE public.ahwalmapping_seq
    START WITH 10145
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.ahwalmapping_seq;
       public       postgres    false    3         �            1259    16544    ahwalmapping    TABLE     �  CREATE TABLE public.ahwalmapping (
    ahwalmappingid bigint DEFAULT nextval('public.ahwalmapping_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    shiftid integer NOT NULL,
    sectorid bigint NOT NULL,
    patrolroleid integer NOT NULL,
    citygroupid bigint NOT NULL,
    personid bigint NOT NULL,
    hasfixedcallerid smallint DEFAULT 0 NOT NULL,
    callerid character varying(50),
    hasdevices smallint DEFAULT 0 NOT NULL,
    handheldid bigint,
    patrolid bigint,
    patrolpersonstateid integer,
    laststatechangetimestamp timestamp without time zone,
    sunrisetimestamp timestamp without time zone,
    sunsettimestamp timestamp without time zone,
    lastlandtimestamp timestamp without time zone,
    lastseatimestamp timestamp without time zone,
    lastawaytimestamp timestamp without time zone,
    lastcomebacktimestamp timestamp without time zone,
    incidentid bigint,
    associtatepersonid bigint,
    sortingindex bigint DEFAULT 10000 NOT NULL
);
     DROP TABLE public.ahwalmapping;
       public         postgres    false    223    3         �            1259    16550    checkinoutstates    TABLE     z   CREATE TABLE public.checkinoutstates (
    checkinoutstateid bigint NOT NULL,
    name character varying(500) NOT NULL
);
 $   DROP TABLE public.checkinoutstates;
       public         postgres    false    3         �            1259    16537 
   citygroups    TABLE       CREATE TABLE public.citygroups (
    citygroupid bigint NOT NULL,
    ahwalid bigint,
    sectorid bigint,
    shortname character varying(50),
    callerprefix character varying(50),
    text character varying(4000),
    disabled smallint DEFAULT 0 NOT NULL
);
    DROP TABLE public.citygroups;
       public         postgres    false    3         �            1259    16683    handhelds_seq    SEQUENCE     z   CREATE SEQUENCE public.handhelds_seq
    START WITH 10010
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.handhelds_seq;
       public       postgres    false    3         �            1259    16480 	   handhelds    TABLE       CREATE TABLE public.handhelds (
    handheldid bigint DEFAULT nextval('public.handhelds_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    serial character varying(50) NOT NULL,
    barcode character varying(50) NOT NULL,
    defective smallint DEFAULT 0 NOT NULL
);
    DROP TABLE public.handhelds;
       public         postgres    false    217    3         �            1259    16704    handheldscheckinout_seq    SEQUENCE     �   CREATE SEQUENCE public.handheldscheckinout_seq
    START WITH 10020
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.handheldscheckinout_seq;
       public       postgres    false    3         �            1259    16559    handheldscheckinout    TABLE     -  CREATE TABLE public.handheldscheckinout (
    handheldcheckinoutid bigint DEFAULT nextval('public.handheldscheckinout_seq'::regclass) NOT NULL,
    checkinoutstateid bigint NOT NULL,
    handheldid bigint NOT NULL,
    personid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);
 '   DROP TABLE public.handheldscheckinout;
       public         postgres    false    224    3         �            1259    16698    incidents_seq    SEQUENCE     w   CREATE SEQUENCE public.incidents_seq
    START WITH 24
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.incidents_seq;
       public       postgres    false    3         �            1259    16531 	   incidents    TABLE     2  CREATE TABLE public.incidents (
    incidentid bigint DEFAULT nextval('public.incidents_seq'::regclass) NOT NULL,
    incidenttypeid integer NOT NULL,
    incidentstateid integer NOT NULL,
    place character varying(4000),
    incidentsourceid integer NOT NULL,
    incidentsourceextrainfo1 character varying(4000),
    incidentsourceextrainfo2 character varying(4000),
    incidentsourceextrainfo3 character varying(4000),
    userid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    lastupdate timestamp without time zone NOT NULL
);
    DROP TABLE public.incidents;
       public         postgres    false    222    3         �            1259    16707    incidentscomments_seq    SEQUENCE     �   CREATE SEQUENCE public.incidentscomments_seq
    START WITH 171
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.incidentscomments_seq;
       public       postgres    false    3         �            1259    16562    incidentscomments    TABLE       CREATE TABLE public.incidentscomments (
    incidentcommentid bigint DEFAULT nextval('public.incidentscomments_seq'::regclass) NOT NULL,
    incidentid bigint NOT NULL,
    text character varying(4000),
    userid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);
 %   DROP TABLE public.incidentscomments;
       public         postgres    false    225    3         �            1259    16484    incidentsources    TABLE     �  CREATE TABLE public.incidentsources (
    incidentsourceid integer NOT NULL,
    name character varying(400) NOT NULL,
    mainextrainfonumber integer DEFAULT 0 NOT NULL,
    extrainfo1 character varying(400),
    extrainfo2 character varying(400),
    extrainfo3 character varying(400),
    requiresextrainfo1 smallint DEFAULT 0 NOT NULL,
    requiresextrainfo2 smallint DEFAULT 0 NOT NULL,
    requiresextrainfo3 smallint DEFAULT 0 NOT NULL
);
 #   DROP TABLE public.incidentsources;
       public         postgres    false    3         �            1259    16517    incidentstates    TABLE     w   CREATE TABLE public.incidentstates (
    incidentstateid integer NOT NULL,
    name character varying(100) NOT NULL
);
 "   DROP TABLE public.incidentstates;
       public         postgres    false    3         �            1259    16520    incidentstypes    TABLE     �   CREATE TABLE public.incidentstypes (
    incidenttypeid integer NOT NULL,
    name character varying(400) NOT NULL,
    priority integer
);
 "   DROP TABLE public.incidentstypes;
       public         postgres    false    3         �            1259    16568    incidentsview    TABLE     �   CREATE TABLE public.incidentsview (
    incidentid bigint NOT NULL,
    userid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);
 !   DROP TABLE public.incidentsview;
       public         postgres    false    3         �            1259    16710    livecallers_seq    SEQUENCE     x   CREATE SEQUENCE public.livecallers_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.livecallers_seq;
       public       postgres    false    3         �            1259    16571    livecallers    TABLE     �   CREATE TABLE public.livecallers (
    livecallerid bigint DEFAULT nextval('public.livecallers_seq'::regclass) NOT NULL,
    handheldid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    processed smallint DEFAULT 0 NOT NULL
);
    DROP TABLE public.livecallers;
       public         postgres    false    226    3         �            1259    16713    livecallersunknown_seq    SEQUENCE        CREATE SEQUENCE public.livecallersunknown_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.livecallersunknown_seq;
       public       postgres    false    3         �            1259    16575    livecallersunknown    TABLE     (  CREATE TABLE public.livecallersunknown (
    livecallerunknownid bigint DEFAULT nextval('public.livecallersunknown_seq'::regclass) NOT NULL,
    handheldnumbername character varying(500) NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    processed smallint DEFAULT 0 NOT NULL
);
 &   DROP TABLE public.livecallersunknown;
       public         postgres    false    227    3         �            1259    16722    operationlogs_seq    SEQUENCE     ~   CREATE SEQUENCE public.operationlogs_seq
    START WITH 21820
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.operationlogs_seq;
       public       postgres    false    3         �            1259    16588    operationlogs    TABLE     m  CREATE TABLE public.operationlogs (
    logid bigint DEFAULT nextval('public.operationlogs_seq'::regclass) NOT NULL,
    userid bigint NOT NULL,
    operationid integer NOT NULL,
    "timestamp" timestamp without time zone DEFAULT '2018-09-20 10:34:19.359033'::timestamp without time zone NOT NULL,
    statusid integer NOT NULL,
    text character varying(500)
);
 !   DROP TABLE public.operationlogs;
       public         postgres    false    230    3         �            1259    16716    operations_seq    SEQUENCE     x   CREATE SEQUENCE public.operations_seq
    START WITH 35
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.operations_seq;
       public       postgres    false    3         �            1259    16582 
   operations    TABLE     �   CREATE TABLE public.operations (
    opeartionid integer DEFAULT nextval('public.operations_seq'::regclass) NOT NULL,
    name character varying(500) NOT NULL
);
    DROP TABLE public.operations;
       public         postgres    false    228    3         �            1259    16719    operationsstatus_seq    SEQUENCE     }   CREATE SEQUENCE public.operationsstatus_seq
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.operationsstatus_seq;
       public       postgres    false    3         �            1259    16585    operationsstatus    TABLE     �   CREATE TABLE public.operationsstatus (
    statusid integer DEFAULT nextval('public.operationsstatus_seq'::regclass) NOT NULL,
    name character varying(500) NOT NULL
);
 $   DROP TABLE public.operationsstatus;
       public         postgres    false    229    3         �            1259    16686    patrolcars_seq    SEQUENCE     {   CREATE SEQUENCE public.patrolcars_seq
    START WITH 10023
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.patrolcars_seq;
       public       postgres    false    3         �            1259    16494 
   patrolcars    TABLE     �  CREATE TABLE public.patrolcars (
    patrolid bigint DEFAULT nextval('public.patrolcars_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    platenumber character varying(50) NOT NULL,
    barcode character varying(50) NOT NULL,
    model character varying(50),
    type character varying(50),
    vinnumber character varying(50),
    defective smallint DEFAULT 0 NOT NULL,
    rental smallint DEFAULT 0 NOT NULL
);
    DROP TABLE public.patrolcars;
       public         postgres    false    218    3         �            1259    16725    patrolcheckinout_seq    SEQUENCE     �   CREATE SEQUENCE public.patrolcheckinout_seq
    START WITH 10020
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.patrolcheckinout_seq;
       public       postgres    false    3         �            1259    16595    patrolcheckinout    TABLE     #  CREATE TABLE public.patrolcheckinout (
    patrolcheckinoutid bigint DEFAULT nextval('public.patrolcheckinout_seq'::regclass) NOT NULL,
    checkinoutstateid bigint NOT NULL,
    patrolid bigint NOT NULL,
    personid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);
 $   DROP TABLE public.patrolcheckinout;
       public         postgres    false    231    3         �            1259    16728    patrolpersonstatelog_seq    SEQUENCE     �   CREATE SEQUENCE public.patrolpersonstatelog_seq
    START WITH 10209
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.patrolpersonstatelog_seq;
       public       postgres    false    3         �            1259    16598    patrolpersonstatelog    TABLE     0  CREATE TABLE public.patrolpersonstatelog (
    patrolpersonstatelogid bigint DEFAULT nextval('public.patrolpersonstatelog_seq'::regclass) NOT NULL,
    userid bigint NOT NULL,
    personid bigint NOT NULL,
    patrolpersonstateid integer NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);
 (   DROP TABLE public.patrolpersonstatelog;
       public         postgres    false    232    3         �            1259    16499    patrolpersonstates    TABLE     v   CREATE TABLE public.patrolpersonstates (
    patrolpersonstateid integer NOT NULL,
    name character varying(500)
);
 &   DROP TABLE public.patrolpersonstates;
       public         postgres    false    3         �            1259    16502    patrolroles    TABLE     p   CREATE TABLE public.patrolroles (
    patrolroleid integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.patrolroles;
       public         postgres    false    3         �            1259    16692    persons_seq    SEQUENCE     u   CREATE SEQUENCE public.persons_seq
    START WITH 28
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.persons_seq;
       public       postgres    false    3         �            1259    16511    persons    TABLE     3  CREATE TABLE public.persons (
    personid bigint DEFAULT nextval('public.persons_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    milnumber bigint NOT NULL,
    rankid integer NOT NULL,
    name character varying(500),
    mobile character varying(50),
    fixedcallerid character varying(50)
);
    DROP TABLE public.persons;
       public         postgres    false    220    3         �            1259    16505    ranks    TABLE     d   CREATE TABLE public.ranks (
    rankid integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.ranks;
       public         postgres    false    3         �            1259    16731    reservedcallers_seq    SEQUENCE     |   CREATE SEQUENCE public.reservedcallers_seq
    START WITH 4
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.reservedcallers_seq;
       public       postgres    false    3         �            1259    16601    reservedcallers    TABLE     �   CREATE TABLE public.reservedcallers (
    reservedid integer DEFAULT nextval('public.reservedcallers_seq'::regclass) NOT NULL,
    reservedcallerid character varying(50)
);
 #   DROP TABLE public.reservedcallers;
       public         postgres    false    233    3         �            1259    16473    sectors    TABLE     �   CREATE TABLE public.sectors (
    sectorid bigint NOT NULL,
    ahwalid bigint,
    shortname character varying(500) NOT NULL,
    callerprefix character(2),
    disabled smallint DEFAULT 0 NOT NULL
);
    DROP TABLE public.sectors;
       public         postgres    false    3         �            1259    16689 
   shifts_seq    SEQUENCE     s   CREATE SEQUENCE public.shifts_seq
    START WITH 4
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.shifts_seq;
       public       postgres    false    3         �            1259    16508    shifts    TABLE     �   CREATE TABLE public.shifts (
    shiftid integer DEFAULT nextval('public.shifts_seq'::regclass) NOT NULL,
    name character varying(50),
    startinghour integer NOT NULL,
    numberofhours integer NOT NULL
);
    DROP TABLE public.shifts;
       public         postgres    false    219    3         �            1259    16734    sysdiagrams_seq    SEQUENCE     x   CREATE SEQUENCE public.sysdiagrams_seq
    START WITH 2
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sysdiagrams_seq;
       public       postgres    false    3         �            1259    16604    sysdiagrams    TABLE     �   CREATE TABLE public.sysdiagrams (
    name character varying(128) NOT NULL,
    principal_id integer NOT NULL,
    diagram_id integer DEFAULT nextval('public.sysdiagrams_seq'::regclass) NOT NULL,
    version integer,
    definition bytea
);
    DROP TABLE public.sysdiagrams;
       public         postgres    false    234    3         �            1259    16695 	   users_seq    SEQUENCE     r   CREATE SEQUENCE public.users_seq
    START WITH 9
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.users_seq;
       public       postgres    false    3         �            1259    16523    users    TABLE     �  CREATE TABLE public.users (
    userid bigint DEFAULT nextval('public.users_seq'::regclass) NOT NULL,
    username character varying(50) NOT NULL,
    name character varying(500),
    password character varying(500) NOT NULL,
    salt character varying(50) NOT NULL,
    failedlogins integer DEFAULT 0 NOT NULL,
    lastsuccesslogin timestamp without time zone,
    lastfailedlogin timestamp without time zone,
    lastipaddress character varying(50),
    accountlocked smallint DEFAULT 0 NOT NULL,
    layout_ahwalmapping character varying(4000),
    layout_groups_ahawalmapping character varying(4000),
    layout_opslive character varying(4000),
    layout_groups_opslivegrid character varying(4000)
);
    DROP TABLE public.users;
       public         postgres    false    221    3         �            1259    16610 
   usersroles    TABLE     m   CREATE TABLE public.usersroles (
    userroleid integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.usersroles;
       public         postgres    false    3         �            1259    16613    usersrolesmap    TABLE     �   CREATE TABLE public.usersrolesmap (
    userid bigint NOT NULL,
    ahwalid bigint NOT NULL,
    userroleid integer NOT NULL
);
 !   DROP TABLE public.usersrolesmap;
       public         postgres    false    3         y	          0    16467    ahwal 
   TABLE DATA               .   COPY public.ahwal (ahwalid, name) FROM stdin;
    public       postgres    false    185       2425.dat �	           0    0 	   ahwal_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.ahwal_seq', 5, false);
            public       postgres    false    216         �	          0    16544    ahwalmapping 
   TABLE DATA               �  COPY public.ahwalmapping (ahwalmappingid, ahwalid, shiftid, sectorid, patrolroleid, citygroupid, personid, hasfixedcallerid, callerid, hasdevices, handheldid, patrolid, patrolpersonstateid, laststatechangetimestamp, sunrisetimestamp, sunsettimestamp, lastlandtimestamp, lastseatimestamp, lastawaytimestamp, lastcomebacktimestamp, incidentid, associtatepersonid, sortingindex) FROM stdin;
    public       postgres    false    200       2440.dat �	           0    0    ahwalmapping_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.ahwalmapping_seq', 10145, false);
            public       postgres    false    223         �	          0    16550    checkinoutstates 
   TABLE DATA               C   COPY public.checkinoutstates (checkinoutstateid, name) FROM stdin;
    public       postgres    false    201       2441.dat �	          0    16537 
   citygroups 
   TABLE DATA               m   COPY public.citygroups (citygroupid, ahwalid, sectorid, shortname, callerprefix, text, disabled) FROM stdin;
    public       postgres    false    199       2439.dat {	          0    16480 	   handhelds 
   TABLE DATA               T   COPY public.handhelds (handheldid, ahwalid, serial, barcode, defective) FROM stdin;
    public       postgres    false    187       2427.dat �	           0    0    handhelds_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.handhelds_seq', 10010, false);
            public       postgres    false    217         �	          0    16559    handheldscheckinout 
   TABLE DATA               y   COPY public.handheldscheckinout (handheldcheckinoutid, checkinoutstateid, handheldid, personid, "timestamp") FROM stdin;
    public       postgres    false    202       2442.dat �	           0    0    handheldscheckinout_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.handheldscheckinout_seq', 10020, false);
            public       postgres    false    224         �	          0    16531 	   incidents 
   TABLE DATA               �   COPY public.incidents (incidentid, incidenttypeid, incidentstateid, place, incidentsourceid, incidentsourceextrainfo1, incidentsourceextrainfo2, incidentsourceextrainfo3, userid, "timestamp", lastupdate) FROM stdin;
    public       postgres    false    198       2438.dat �	           0    0    incidents_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.incidents_seq', 24, false);
            public       postgres    false    222         �	          0    16562    incidentscomments 
   TABLE DATA               e   COPY public.incidentscomments (incidentcommentid, incidentid, text, userid, "timestamp") FROM stdin;
    public       postgres    false    203       2443.dat �	           0    0    incidentscomments_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.incidentscomments_seq', 171, false);
            public       postgres    false    225         |	          0    16484    incidentsources 
   TABLE DATA               �   COPY public.incidentsources (incidentsourceid, name, mainextrainfonumber, extrainfo1, extrainfo2, extrainfo3, requiresextrainfo1, requiresextrainfo2, requiresextrainfo3) FROM stdin;
    public       postgres    false    188       2428.dat �	          0    16517    incidentstates 
   TABLE DATA               ?   COPY public.incidentstates (incidentstateid, name) FROM stdin;
    public       postgres    false    195       2435.dat �	          0    16520    incidentstypes 
   TABLE DATA               H   COPY public.incidentstypes (incidenttypeid, name, priority) FROM stdin;
    public       postgres    false    196       2436.dat �	          0    16568    incidentsview 
   TABLE DATA               H   COPY public.incidentsview (incidentid, userid, "timestamp") FROM stdin;
    public       postgres    false    204       2444.dat �	          0    16571    livecallers 
   TABLE DATA               W   COPY public.livecallers (livecallerid, handheldid, "timestamp", processed) FROM stdin;
    public       postgres    false    205       2445.dat �	           0    0    livecallers_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.livecallers_seq', 1, false);
            public       postgres    false    226         �	          0    16575    livecallersunknown 
   TABLE DATA               m   COPY public.livecallersunknown (livecallerunknownid, handheldnumbername, "timestamp", processed) FROM stdin;
    public       postgres    false    206       2446.dat �	           0    0    livecallersunknown_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.livecallersunknown_seq', 1, false);
            public       postgres    false    227         �	          0    16588    operationlogs 
   TABLE DATA               `   COPY public.operationlogs (logid, userid, operationid, "timestamp", statusid, text) FROM stdin;
    public       postgres    false    209       2449.dat �	           0    0    operationlogs_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.operationlogs_seq', 21820, false);
            public       postgres    false    230         �	          0    16582 
   operations 
   TABLE DATA               7   COPY public.operations (opeartionid, name) FROM stdin;
    public       postgres    false    207       2447.dat �	           0    0    operations_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.operations_seq', 35, false);
            public       postgres    false    228         �	          0    16585    operationsstatus 
   TABLE DATA               :   COPY public.operationsstatus (statusid, name) FROM stdin;
    public       postgres    false    208       2448.dat �	           0    0    operationsstatus_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.operationsstatus_seq', 7, false);
            public       postgres    false    229         }	          0    16494 
   patrolcars 
   TABLE DATA               x   COPY public.patrolcars (patrolid, ahwalid, platenumber, barcode, model, type, vinnumber, defective, rental) FROM stdin;
    public       postgres    false    189       2429.dat �	           0    0    patrolcars_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.patrolcars_seq', 10023, false);
            public       postgres    false    218         �	          0    16595    patrolcheckinout 
   TABLE DATA               r   COPY public.patrolcheckinout (patrolcheckinoutid, checkinoutstateid, patrolid, personid, "timestamp") FROM stdin;
    public       postgres    false    210       2450.dat �	           0    0    patrolcheckinout_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.patrolcheckinout_seq', 10020, false);
            public       postgres    false    231         �	          0    16598    patrolpersonstatelog 
   TABLE DATA               z   COPY public.patrolpersonstatelog (patrolpersonstatelogid, userid, personid, patrolpersonstateid, "timestamp") FROM stdin;
    public       postgres    false    211       2451.dat �	           0    0    patrolpersonstatelog_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.patrolpersonstatelog_seq', 10209, false);
            public       postgres    false    232         ~	          0    16499    patrolpersonstates 
   TABLE DATA               G   COPY public.patrolpersonstates (patrolpersonstateid, name) FROM stdin;
    public       postgres    false    190       2430.dat 	          0    16502    patrolroles 
   TABLE DATA               9   COPY public.patrolroles (patrolroleid, name) FROM stdin;
    public       postgres    false    191       2431.dat �	          0    16511    persons 
   TABLE DATA               d   COPY public.persons (personid, ahwalid, milnumber, rankid, name, mobile, fixedcallerid) FROM stdin;
    public       postgres    false    194       2434.dat �	           0    0    persons_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.persons_seq', 28, false);
            public       postgres    false    220         �	          0    16505    ranks 
   TABLE DATA               -   COPY public.ranks (rankid, name) FROM stdin;
    public       postgres    false    192       2432.dat �	          0    16601    reservedcallers 
   TABLE DATA               G   COPY public.reservedcallers (reservedid, reservedcallerid) FROM stdin;
    public       postgres    false    212       2452.dat �	           0    0    reservedcallers_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.reservedcallers_seq', 4, false);
            public       postgres    false    233         z	          0    16473    sectors 
   TABLE DATA               W   COPY public.sectors (sectorid, ahwalid, shortname, callerprefix, disabled) FROM stdin;
    public       postgres    false    186       2426.dat �	          0    16508    shifts 
   TABLE DATA               L   COPY public.shifts (shiftid, name, startinghour, numberofhours) FROM stdin;
    public       postgres    false    193       2433.dat �	           0    0 
   shifts_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.shifts_seq', 4, false);
            public       postgres    false    219         �	          0    16604    sysdiagrams 
   TABLE DATA               Z   COPY public.sysdiagrams (name, principal_id, diagram_id, version, definition) FROM stdin;
    public       postgres    false    213       2453.dat �	           0    0    sysdiagrams_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.sysdiagrams_seq', 2, false);
            public       postgres    false    234         �	          0    16523    users 
   TABLE DATA               �   COPY public.users (userid, username, name, password, salt, failedlogins, lastsuccesslogin, lastfailedlogin, lastipaddress, accountlocked, layout_ahwalmapping, layout_groups_ahawalmapping, layout_opslive, layout_groups_opslivegrid) FROM stdin;
    public       postgres    false    197       2437.dat �	           0    0 	   users_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.users_seq', 9, false);
            public       postgres    false    221         �	          0    16610 
   usersroles 
   TABLE DATA               6   COPY public.usersroles (userroleid, name) FROM stdin;
    public       postgres    false    214       2454.dat �	          0    16613    usersrolesmap 
   TABLE DATA               D   COPY public.usersrolesmap (userid, ahwalid, userroleid) FROM stdin;
    public       postgres    false    215       2455.dat �           2606    16674 *   sysdiagrams pk__sysdiagr__c2b05b618ed7f4a5 
   CONSTRAINT     p   ALTER TABLE ONLY public.sysdiagrams
    ADD CONSTRAINT pk__sysdiagr__c2b05b618ed7f4a5 PRIMARY KEY (diagram_id);
 T   ALTER TABLE ONLY public.sysdiagrams DROP CONSTRAINT pk__sysdiagr__c2b05b618ed7f4a5;
       public         postgres    false    213    213         �           2606    16618    ahwal pk_ahwal 
   CONSTRAINT     Q   ALTER TABLE ONLY public.ahwal
    ADD CONSTRAINT pk_ahwal PRIMARY KEY (ahwalid);
 8   ALTER TABLE ONLY public.ahwal DROP CONSTRAINT pk_ahwal;
       public         postgres    false    185    185         �           2606    16648    ahwalmapping pk_ahwalmapping 
   CONSTRAINT     f   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT pk_ahwalmapping PRIMARY KEY (ahwalmappingid);
 F   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT pk_ahwalmapping;
       public         postgres    false    200    200         �           2606    16650 $   checkinoutstates pk_checkinoutstates 
   CONSTRAINT     q   ALTER TABLE ONLY public.checkinoutstates
    ADD CONSTRAINT pk_checkinoutstates PRIMARY KEY (checkinoutstateid);
 N   ALTER TABLE ONLY public.checkinoutstates DROP CONSTRAINT pk_checkinoutstates;
       public         postgres    false    201    201         �           2606    16646    citygroups pk_citygroups 
   CONSTRAINT     _   ALTER TABLE ONLY public.citygroups
    ADD CONSTRAINT pk_citygroups PRIMARY KEY (citygroupid);
 B   ALTER TABLE ONLY public.citygroups DROP CONSTRAINT pk_citygroups;
       public         postgres    false    199    199         �           2606    16622    handhelds pk_handhelds 
   CONSTRAINT     \   ALTER TABLE ONLY public.handhelds
    ADD CONSTRAINT pk_handhelds PRIMARY KEY (handheldid);
 @   ALTER TABLE ONLY public.handhelds DROP CONSTRAINT pk_handhelds;
       public         postgres    false    187    187         �           2606    16652 *   handheldscheckinout pk_handheldscheckinout 
   CONSTRAINT     z   ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT pk_handheldscheckinout PRIMARY KEY (handheldcheckinoutid);
 T   ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT pk_handheldscheckinout;
       public         postgres    false    202    202         �           2606    16654 %   incidentscomments pk_incidentcomments 
   CONSTRAINT     r   ALTER TABLE ONLY public.incidentscomments
    ADD CONSTRAINT pk_incidentcomments PRIMARY KEY (incidentcommentid);
 O   ALTER TABLE ONLY public.incidentscomments DROP CONSTRAINT pk_incidentcomments;
       public         postgres    false    203    203         �           2606    16644    incidents pk_incidents 
   CONSTRAINT     \   ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT pk_incidents PRIMARY KEY (incidentid);
 @   ALTER TABLE ONLY public.incidents DROP CONSTRAINT pk_incidents;
       public         postgres    false    198    198         �           2606    16624 "   incidentsources pk_incidentsources 
   CONSTRAINT     n   ALTER TABLE ONLY public.incidentsources
    ADD CONSTRAINT pk_incidentsources PRIMARY KEY (incidentsourceid);
 L   ALTER TABLE ONLY public.incidentsources DROP CONSTRAINT pk_incidentsources;
       public         postgres    false    188    188         �           2606    16638     incidentstates pk_incidentstates 
   CONSTRAINT     k   ALTER TABLE ONLY public.incidentstates
    ADD CONSTRAINT pk_incidentstates PRIMARY KEY (incidentstateid);
 J   ALTER TABLE ONLY public.incidentstates DROP CONSTRAINT pk_incidentstates;
       public         postgres    false    195    195         �           2606    16656    incidentsview pk_incidentsview 
   CONSTRAINT     l   ALTER TABLE ONLY public.incidentsview
    ADD CONSTRAINT pk_incidentsview PRIMARY KEY (incidentid, userid);
 H   ALTER TABLE ONLY public.incidentsview DROP CONSTRAINT pk_incidentsview;
       public         postgres    false    204    204    204         �           2606    16640    incidentstypes pk_incidenttypes 
   CONSTRAINT     i   ALTER TABLE ONLY public.incidentstypes
    ADD CONSTRAINT pk_incidenttypes PRIMARY KEY (incidenttypeid);
 I   ALTER TABLE ONLY public.incidentstypes DROP CONSTRAINT pk_incidenttypes;
       public         postgres    false    196    196         �           2606    16658    livecallers pk_livecallers 
   CONSTRAINT     b   ALTER TABLE ONLY public.livecallers
    ADD CONSTRAINT pk_livecallers PRIMARY KEY (livecallerid);
 D   ALTER TABLE ONLY public.livecallers DROP CONSTRAINT pk_livecallers;
       public         postgres    false    205    205         �           2606    16660 '   livecallersunknown pk_livecallerunknown 
   CONSTRAINT     v   ALTER TABLE ONLY public.livecallersunknown
    ADD CONSTRAINT pk_livecallerunknown PRIMARY KEY (livecallerunknownid);
 Q   ALTER TABLE ONLY public.livecallersunknown DROP CONSTRAINT pk_livecallerunknown;
       public         postgres    false    206    206         �           2606    16666    operationlogs pk_operationlogs 
   CONSTRAINT     _   ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT pk_operationlogs PRIMARY KEY (logid);
 H   ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT pk_operationlogs;
       public         postgres    false    209    209         �           2606    16662    operations pk_operations 
   CONSTRAINT     _   ALTER TABLE ONLY public.operations
    ADD CONSTRAINT pk_operations PRIMARY KEY (opeartionid);
 B   ALTER TABLE ONLY public.operations DROP CONSTRAINT pk_operations;
       public         postgres    false    207    207         �           2606    16664 $   operationsstatus pk_operationsstatus 
   CONSTRAINT     h   ALTER TABLE ONLY public.operationsstatus
    ADD CONSTRAINT pk_operationsstatus PRIMARY KEY (statusid);
 N   ALTER TABLE ONLY public.operationsstatus DROP CONSTRAINT pk_operationsstatus;
       public         postgres    false    208    208         �           2606    16626    patrolcars pk_patrolcars 
   CONSTRAINT     \   ALTER TABLE ONLY public.patrolcars
    ADD CONSTRAINT pk_patrolcars PRIMARY KEY (patrolid);
 B   ALTER TABLE ONLY public.patrolcars DROP CONSTRAINT pk_patrolcars;
       public         postgres    false    189    189         �           2606    16668 $   patrolcheckinout pk_patrolcheckinout 
   CONSTRAINT     r   ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT pk_patrolcheckinout PRIMARY KEY (patrolcheckinoutid);
 N   ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT pk_patrolcheckinout;
       public         postgres    false    210    210         �           2606    16670 ,   patrolpersonstatelog pk_patrolpersonstatelog 
   CONSTRAINT     ~   ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT pk_patrolpersonstatelog PRIMARY KEY (patrolpersonstatelogid);
 V   ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT pk_patrolpersonstatelog;
       public         postgres    false    211    211         �           2606    16628 (   patrolpersonstates pk_patrolpersonstates 
   CONSTRAINT     w   ALTER TABLE ONLY public.patrolpersonstates
    ADD CONSTRAINT pk_patrolpersonstates PRIMARY KEY (patrolpersonstateid);
 R   ALTER TABLE ONLY public.patrolpersonstates DROP CONSTRAINT pk_patrolpersonstates;
       public         postgres    false    190    190         �           2606    16630    patrolroles pk_patrolroles 
   CONSTRAINT     b   ALTER TABLE ONLY public.patrolroles
    ADD CONSTRAINT pk_patrolroles PRIMARY KEY (patrolroleid);
 D   ALTER TABLE ONLY public.patrolroles DROP CONSTRAINT pk_patrolroles;
       public         postgres    false    191    191         �           2606    16636    persons pk_persons_1 
   CONSTRAINT     X   ALTER TABLE ONLY public.persons
    ADD CONSTRAINT pk_persons_1 PRIMARY KEY (personid);
 >   ALTER TABLE ONLY public.persons DROP CONSTRAINT pk_persons_1;
       public         postgres    false    194    194         �           2606    16632    ranks pk_ranks 
   CONSTRAINT     P   ALTER TABLE ONLY public.ranks
    ADD CONSTRAINT pk_ranks PRIMARY KEY (rankid);
 8   ALTER TABLE ONLY public.ranks DROP CONSTRAINT pk_ranks;
       public         postgres    false    192    192         �           2606    16672 "   reservedcallers pk_reservedcallers 
   CONSTRAINT     h   ALTER TABLE ONLY public.reservedcallers
    ADD CONSTRAINT pk_reservedcallers PRIMARY KEY (reservedid);
 L   ALTER TABLE ONLY public.reservedcallers DROP CONSTRAINT pk_reservedcallers;
       public         postgres    false    212    212         �           2606    16620    sectors pk_sectors 
   CONSTRAINT     V   ALTER TABLE ONLY public.sectors
    ADD CONSTRAINT pk_sectors PRIMARY KEY (sectorid);
 <   ALTER TABLE ONLY public.sectors DROP CONSTRAINT pk_sectors;
       public         postgres    false    186    186         �           2606    16634    shifts pk_shifts 
   CONSTRAINT     S   ALTER TABLE ONLY public.shifts
    ADD CONSTRAINT pk_shifts PRIMARY KEY (shiftid);
 :   ALTER TABLE ONLY public.shifts DROP CONSTRAINT pk_shifts;
       public         postgres    false    193    193         �           2606    16677    usersroles pk_userroles 
   CONSTRAINT     ]   ALTER TABLE ONLY public.usersroles
    ADD CONSTRAINT pk_userroles PRIMARY KEY (userroleid);
 A   ALTER TABLE ONLY public.usersroles DROP CONSTRAINT pk_userroles;
       public         postgres    false    214    214         �           2606    16642    users pk_users 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_users PRIMARY KEY (userid);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT pk_users;
       public         postgres    false    197    197         �           2606    16679    usersrolesmap pk_usersrolesmap 
   CONSTRAINT     u   ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT pk_usersrolesmap PRIMARY KEY (userid, ahwalid, userroleid);
 H   ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT pk_usersrolesmap;
       public         postgres    false    215    215    215    215         �           1259    16675    uk_principal_name    INDEX     ^   CREATE UNIQUE INDEX uk_principal_name ON public.sysdiagrams USING btree (principal_id, name);
 %   DROP INDEX public.uk_principal_name;
       public         postgres    false    213    213         �           2606    16792 '   ahwalmapping fk_ahwalmapping_citygroups    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_citygroups FOREIGN KEY (citygroupid) REFERENCES public.citygroups(citygroupid);
 Q   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_citygroups;
       public       postgres    false    2234    199    200         �           2606    16797 &   ahwalmapping fk_ahwalmapping_handhelds    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_handhelds FOREIGN KEY (handheldid) REFERENCES public.handhelds(handheldid);
 P   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_handhelds;
       public       postgres    false    200    187    2210         �           2606    16802 &   ahwalmapping fk_ahwalmapping_incidents    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_incidents FOREIGN KEY (incidentid) REFERENCES public.incidents(incidentid);
 P   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_incidents;
       public       postgres    false    198    2232    200         �           2606    16807 '   ahwalmapping fk_ahwalmapping_patrolcars    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_patrolcars FOREIGN KEY (patrolid) REFERENCES public.patrolcars(patrolid);
 Q   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_patrolcars;
       public       postgres    false    2214    189    200         �           2606    16812 /   ahwalmapping fk_ahwalmapping_patrolpersonstates    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_patrolpersonstates FOREIGN KEY (patrolpersonstateid) REFERENCES public.patrolpersonstates(patrolpersonstateid);
 Y   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_patrolpersonstates;
       public       postgres    false    200    2216    190         �           2606    16817 (   ahwalmapping fk_ahwalmapping_patrolroles    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_patrolroles FOREIGN KEY (patrolroleid) REFERENCES public.patrolroles(patrolroleid);
 R   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_patrolroles;
       public       postgres    false    2218    191    200         �           2606    16822 $   ahwalmapping fk_ahwalmapping_persons    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);
 N   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_persons;
       public       postgres    false    2224    200    194         �           2606    16827 $   ahwalmapping fk_ahwalmapping_sectors    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_sectors FOREIGN KEY (sectorid) REFERENCES public.sectors(sectorid);
 N   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_sectors;
       public       postgres    false    2208    186    200         �           2606    16832 #   ahwalmapping fk_ahwalmapping_shifts    FK CONSTRAINT     �   ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_shifts FOREIGN KEY (shiftid) REFERENCES public.shifts(shiftid);
 M   ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_shifts;
       public       postgres    false    200    193    2222         �           2606    16782    citygroups fk_citygroups_ahwal    FK CONSTRAINT     �   ALTER TABLE ONLY public.citygroups
    ADD CONSTRAINT fk_citygroups_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);
 H   ALTER TABLE ONLY public.citygroups DROP CONSTRAINT fk_citygroups_ahwal;
       public       postgres    false    185    2206    199         �           2606    16787     citygroups fk_citygroups_sectors    FK CONSTRAINT     �   ALTER TABLE ONLY public.citygroups
    ADD CONSTRAINT fk_citygroups_sectors FOREIGN KEY (sectorid) REFERENCES public.sectors(sectorid);
 J   ALTER TABLE ONLY public.citygroups DROP CONSTRAINT fk_citygroups_sectors;
       public       postgres    false    186    199    2208         �           2606    16742    handhelds fk_handhelds_ahwal    FK CONSTRAINT     �   ALTER TABLE ONLY public.handhelds
    ADD CONSTRAINT fk_handhelds_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);
 F   ALTER TABLE ONLY public.handhelds DROP CONSTRAINT fk_handhelds_ahwal;
       public       postgres    false    187    2206    185         �           2606    16837 ;   handheldscheckinout fk_handheldscheckinout_checkinoutstates    FK CONSTRAINT     �   ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT fk_handheldscheckinout_checkinoutstates FOREIGN KEY (checkinoutstateid) REFERENCES public.checkinoutstates(checkinoutstateid);
 e   ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT fk_handheldscheckinout_checkinoutstates;
       public       postgres    false    2238    202    201         �           2606    16842 4   handheldscheckinout fk_handheldscheckinout_handhelds    FK CONSTRAINT     �   ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT fk_handheldscheckinout_handhelds FOREIGN KEY (handheldid) REFERENCES public.handhelds(handheldid);
 ^   ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT fk_handheldscheckinout_handhelds;
       public       postgres    false    2210    187    202         �           2606    16847 2   handheldscheckinout fk_handheldscheckinout_persons    FK CONSTRAINT     �   ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT fk_handheldscheckinout_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);
 \   ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT fk_handheldscheckinout_persons;
       public       postgres    false    202    2224    194         �           2606    16762 &   incidents fk_incidents_incidentsources    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_incidentsources FOREIGN KEY (incidentsourceid) REFERENCES public.incidentsources(incidentsourceid);
 P   ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_incidentsources;
       public       postgres    false    198    188    2212         �           2606    16767 %   incidents fk_incidents_incidentstates    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_incidentstates FOREIGN KEY (incidentstateid) REFERENCES public.incidentstates(incidentstateid);
 O   ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_incidentstates;
       public       postgres    false    198    2226    195         �           2606    16772 %   incidents fk_incidents_incidentstypes    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_incidentstypes FOREIGN KEY (incidenttypeid) REFERENCES public.incidentstypes(incidenttypeid);
 O   ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_incidentstypes;
       public       postgres    false    196    2228    198         �           2606    16777    incidents fk_incidents_users    FK CONSTRAINT     ~   ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_users FOREIGN KEY (userid) REFERENCES public.users(userid);
 F   ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_users;
       public       postgres    false    198    197    2230         �           2606    16852 0   incidentscomments fk_incidentscomments_incidents    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidentscomments
    ADD CONSTRAINT fk_incidentscomments_incidents FOREIGN KEY (incidentid) REFERENCES public.incidents(incidentid);
 Z   ALTER TABLE ONLY public.incidentscomments DROP CONSTRAINT fk_incidentscomments_incidents;
       public       postgres    false    2232    198    203         �           2606    16857 ,   incidentscomments fk_incidentscomments_users    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidentscomments
    ADD CONSTRAINT fk_incidentscomments_users FOREIGN KEY (userid) REFERENCES public.users(userid);
 V   ALTER TABLE ONLY public.incidentscomments DROP CONSTRAINT fk_incidentscomments_users;
       public       postgres    false    203    197    2230         �           2606    16862 (   incidentsview fk_incidentsview_incidents    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidentsview
    ADD CONSTRAINT fk_incidentsview_incidents FOREIGN KEY (incidentid) REFERENCES public.incidents(incidentid);
 R   ALTER TABLE ONLY public.incidentsview DROP CONSTRAINT fk_incidentsview_incidents;
       public       postgres    false    204    2232    198         �           2606    16867 $   incidentsview fk_incidentsview_users    FK CONSTRAINT     �   ALTER TABLE ONLY public.incidentsview
    ADD CONSTRAINT fk_incidentsview_users FOREIGN KEY (userid) REFERENCES public.users(userid);
 N   ALTER TABLE ONLY public.incidentsview DROP CONSTRAINT fk_incidentsview_users;
       public       postgres    false    2230    204    197         �           2606    16872 $   livecallers fk_livecallers_handhelds    FK CONSTRAINT     �   ALTER TABLE ONLY public.livecallers
    ADD CONSTRAINT fk_livecallers_handhelds FOREIGN KEY (handheldid) REFERENCES public.handhelds(handheldid);
 N   ALTER TABLE ONLY public.livecallers DROP CONSTRAINT fk_livecallers_handhelds;
       public       postgres    false    187    205    2210         �           2606    16877 )   operationlogs fk_operationlogs_operations    FK CONSTRAINT     �   ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT fk_operationlogs_operations FOREIGN KEY (operationid) REFERENCES public.operations(opeartionid);
 S   ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT fk_operationlogs_operations;
       public       postgres    false    2250    207    209         �           2606    16882 /   operationlogs fk_operationlogs_operationsstatus    FK CONSTRAINT     �   ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT fk_operationlogs_operationsstatus FOREIGN KEY (statusid) REFERENCES public.operationsstatus(statusid);
 Y   ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT fk_operationlogs_operationsstatus;
       public       postgres    false    209    208    2252         �           2606    16887 $   operationlogs fk_operationlogs_users    FK CONSTRAINT     �   ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT fk_operationlogs_users FOREIGN KEY (userid) REFERENCES public.users(userid);
 N   ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT fk_operationlogs_users;
       public       postgres    false    2230    197    209         �           2606    16747    patrolcars fk_patrolcars_ahwal    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolcars
    ADD CONSTRAINT fk_patrolcars_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);
 H   ALTER TABLE ONLY public.patrolcars DROP CONSTRAINT fk_patrolcars_ahwal;
       public       postgres    false    2206    189    185         �           2606    16892 5   patrolcheckinout fk_patrolcheckinout_checkinoutstates    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT fk_patrolcheckinout_checkinoutstates FOREIGN KEY (checkinoutstateid) REFERENCES public.checkinoutstates(checkinoutstateid);
 _   ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT fk_patrolcheckinout_checkinoutstates;
       public       postgres    false    210    2238    201         �           2606    16897 /   patrolcheckinout fk_patrolcheckinout_patrolcars    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT fk_patrolcheckinout_patrolcars FOREIGN KEY (patrolid) REFERENCES public.patrolcars(patrolid);
 Y   ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT fk_patrolcheckinout_patrolcars;
       public       postgres    false    2214    189    210         �           2606    16902 ,   patrolcheckinout fk_patrolcheckinout_persons    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT fk_patrolcheckinout_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);
 V   ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT fk_patrolcheckinout_persons;
       public       postgres    false    194    2224    210         �           2606    16907 ?   patrolpersonstatelog fk_patrolpersonstatelog_patrolpersonstates    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT fk_patrolpersonstatelog_patrolpersonstates FOREIGN KEY (patrolpersonstateid) REFERENCES public.patrolpersonstates(patrolpersonstateid);
 i   ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT fk_patrolpersonstatelog_patrolpersonstates;
       public       postgres    false    211    190    2216         �           2606    16912 4   patrolpersonstatelog fk_patrolpersonstatelog_persons    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT fk_patrolpersonstatelog_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);
 ^   ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT fk_patrolpersonstatelog_persons;
       public       postgres    false    2224    211    194          	           2606    16917 2   patrolpersonstatelog fk_patrolpersonstatelog_users    FK CONSTRAINT     �   ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT fk_patrolpersonstatelog_users FOREIGN KEY (userid) REFERENCES public.users(userid);
 \   ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT fk_patrolpersonstatelog_users;
       public       postgres    false    2230    197    211         �           2606    16752    persons fk_persons_ahwal    FK CONSTRAINT     |   ALTER TABLE ONLY public.persons
    ADD CONSTRAINT fk_persons_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);
 B   ALTER TABLE ONLY public.persons DROP CONSTRAINT fk_persons_ahwal;
       public       postgres    false    185    2206    194         �           2606    16757    persons fk_persons_ranks    FK CONSTRAINT     z   ALTER TABLE ONLY public.persons
    ADD CONSTRAINT fk_persons_ranks FOREIGN KEY (rankid) REFERENCES public.ranks(rankid);
 B   ALTER TABLE ONLY public.persons DROP CONSTRAINT fk_persons_ranks;
       public       postgres    false    194    2220    192         �           2606    16737    sectors fk_sectors_ahwal    FK CONSTRAINT     |   ALTER TABLE ONLY public.sectors
    ADD CONSTRAINT fk_sectors_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);
 B   ALTER TABLE ONLY public.sectors DROP CONSTRAINT fk_sectors_ahwal;
       public       postgres    false    185    186    2206         	           2606    16922 $   usersrolesmap fk_usersrolesmap_ahwal    FK CONSTRAINT     �   ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT fk_usersrolesmap_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);
 N   ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT fk_usersrolesmap_ahwal;
       public       postgres    false    215    185    2206         	           2606    16927 $   usersrolesmap fk_usersrolesmap_users    FK CONSTRAINT     �   ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT fk_usersrolesmap_users FOREIGN KEY (userid) REFERENCES public.users(userid);
 N   ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT fk_usersrolesmap_users;
       public       postgres    false    197    215    2230         	           2606    16932 )   usersrolesmap fk_usersrolesmap_usersroles    FK CONSTRAINT     �   ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT fk_usersrolesmap_usersroles FOREIGN KEY (userroleid) REFERENCES public.usersroles(userroleid);
 S   ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT fk_usersrolesmap_usersroles;
       public       postgres    false    215    2265    214                                                                                                                                                                 2425.dat                                                                                            0000600 0004000 0002000 00000000067 13353144341 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	الصناعية
2	شمال
3	غرب
4	جنوب
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                         2440.dat                                                                                            0000600 0004000 0002000 00000002107 13353144341 0014244 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        124	1	1	1	10	1	22	0	\N	0	\N	\N	10	\N	\N	\N	\N	\N	\N	\N	\N	\N	10
126	1	1	2	30	10	24	0	100	0	\N	\N	80	2017-07-09 12:50:38.847	\N	\N	\N	\N	\N	\N	\N	\N	20
129	1	1	2	60	11	6	0	114	0	5	11	50	2017-07-12 12:34:51.63	2017-07-08 02:25:42.873	2017-07-12 12:34:51.63	\N	\N	\N	\N	\N	\N	70
130	1	1	2	60	11	17	0	113	0	\N	\N	90	\N	\N	\N	\N	\N	\N	\N	\N	\N	60
133	1	1	3	60	21	7	0	221	1	10007	17	74	2017-07-16 20:56:06.257	2017-07-08 02:13:25.937	\N	\N	\N	\N	\N	\N	\N	110
140	1	1	2	60	11	12	0	112	1	10009	12	60	2018-09-17 11:00:30.75	2017-07-12 12:48:30	\N	\N	\N	\N	\N	\N	\N	50
141	1	1	2	60	11	26	0	110	1	6	11	30	2018-09-18 12:30:09.57	2017-07-17 10:32:20.83	\N	\N	\N	\N	\N	22	\N	30
142	1	1	2	60	11	27	0	111	0	10008	10022	50	2017-07-16 21:14:52.88	2017-07-12 12:33:55.643	2017-07-16 21:14:52.88	\N	\N	\N	\N	\N	\N	40
10141	1	1	3	60	21	20	0	220	0	\N	\N	10	\N	\N	\N	\N	\N	\N	\N	\N	\N	100
10143	1	1	3	40	19	13	0	200	1	5	16	74	2018-09-14 10:39:21.037	2018-09-14 10:06:05.83	\N	\N	\N	\N	\N	\N	\N	80
10144	1	1	3	80	20	16	0	210	1	10008	10022	20	2018-09-17 09:56:55.857	2018-09-17 09:56:55.857	\N	\N	\N	\N	\N	\N	\N	90
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                         2441.dat                                                                                            0000600 0004000 0002000 00000000052 13353144341 0014242 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        0	None
10	استلام
20	تسليم
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      2439.dat                                                                                            0000600 0004000 0002000 00000006776 13353144341 0014274 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	1	كل القطاعات	0		0
2	1	1	م1	1		1
3	1	1	م2	2		1
4	1	1	م3	3		1
5	1	1	م4	4		1
6	1	1	م5	5		1
7	1	1	م6	6		1
8	1	1	م7	7		1
9	1	1	م8	8		1
10	1	2	 القطاع الأول	0		0
11	1	2	م1	1	الديوان الأميري - البدع - الابراج - الكورنيش - حي السفارات  - الدفنه - كتارا - اللؤلؤة - المجمعات في المنطقه ( الستي سنتر + السلام )	0
12	1	2	م2	2	مدينة حمد الطبية - فريج الهتمي الجديد - المسيله - فريج بن عمران - فريج كليب	0
13	1	2	م3	3	مدينة خليفه شمالية وجنوبيه - المرخيه - دحل الحمام - جليعه - أم لخبا	0
14	1	2	م4	4	* TRIAL * TRIAL 	0
15	1	2	م5	5		1
16	1	2	م6	6		1
17	1	2	م7	7		1
18	1	2	م8	8		1
19	1	3	القطاع الثاني	0		1
20	1	3	م1	1	مطار حمد الدولي - رأس ابو عبود - الخليفات  - أم غويلينه - الغانم العتيق - حسينية الباكستانيه - رأس أبو فنطاس الى دوار عبدالغني	0
21	1	3	م2	2	الدوحة الجديده - فريج عبدالعزيز - النجاده - الجسرة - مشيرب - الأسواق	0
22	1	3	م3	3	السد - النصر - بن محمود - رميله - السلطة الجديدة - رمادا المجمعات (الرويال بلازا - أصمخ مول)	0
23	1	3	م4	4	منطقة المطار - حسينية الامام صادق - الثمامه - نجمه - المنصورة - حسينية زين العابدين - نعيجه - الهلال - المنتزه - منطقة البحارنه - حسينية البحارنه	0
24	1	3	م5	5		1
25	1	3	م6	6		1
26	1	3	م7	7		1
27	1	3	م8	8		1
28	1	4	* TRIAL * TRI	0		1
29	1	4	م1	1	المناصير - السيلية - روضة ابا الحيران - معيذر - الريان الجديد - بوسدره - الوجبه	0
30	1	4	م2	2	مريخ - العزيزية - المرة - الوعب - السودان - اسباير - المجمعات (فيلاجيو + حياة بلازا)	0
31	1	4	م3	3	الصناعيه - مبيريك - المعمورة - عين خالد - بوهامور - مسيمير - طريق سلوى - مجمع الأديان - الكنيسه - القرية الآسيوية	0
32	1	4	م4	4	طريق سلوى الى جسر مكينس والمناطق المحيطة والجانبيه - العزب - طريق الخرارة (الشاحنات)	0
33	1	4	م5	5		1
34	1	4	م6	6		1
35	1	4	م7	7		1
36	1	4	م8	8		1
37	1	5	القطاع الرابع	0		1
38	1	5	م1	1	المريخ - الفروسيه - شعبية خليفه - الريان القديم - المدينه التعليميه - الناصريه - بني هاجر - الوجبه	0
39	1	5	م2	2	السفارة الأمريكية - اللقطه - سوق العلي - دحيل - غرافه الريان - الغرافه - ازغوى - الخيسه (ايكيا) -الخريطيات	0
40	1	5	م3	3	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TR	0
41	1	5	م4	4	* TRIAL * TRIAL * TRIAL * TRIA	0
42	1	5	م5	5	طريق الشمال الى جسر الزبارة	0
43	1	5	م6	6		1
44	1	5	م7	7		1
45	1	5	م8	8		1
46	1	6	القطاع الخامس	0		1
47	1	6	م1	1		1
48	1	6	م2	2		1
49	1	6	م3	3		1
50	1	6	م4	4		1
51	1	6	م5	5		1
52	1	6	م6	6		1
53	1	6	م7	7		1
54	1	6	م8	8		1
55	2	7	القطاع الشمالي	ش		0
56	2	7	م1	1		0
57	2	7	م2	2		1
58	3	8	* TRIAL * TRIA	ج		0
59	3	8	م1	ج		0
60	3	8	م2	غ		1
61	4	9	القطاع الغربي	غ		0
62	4	9	م1	1		0
63	4	9	م2	2		1
\.


  2427.dat                                                                                            0000600 0004000 0002000 00000000216 13353144341 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        5	1	5303030	* TRIAL * 	0
6	1	5303014	HAN5303014	0
10007	1	5303044	* TRIAL * 	0
10008	1	5301011	* TRIAL * 	0
10009	1	5301406	HAN5301406	0
\.


                                                                                                                                                                                                                                                                                                                                                                                  2442.dat                                                                                            0000600 0004000 0002000 00000001521 13353144341 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	10	5	2	2017-07-01 00:00:00
2	20	5	2	2017-07-02 00:00:00
3	10	5	4	2017-07-04 14:17:00.237
4	20	5	4	2017-07-04 16:48:22.283
5	10	5	19	2017-07-06 22:00:15.01
6	10	10007	4	2017-07-07 21:08:29.09
7	20	10007	4	2017-07-07 21:09:24.23
8	10	5	6	2017-07-07 23:20:42.7
9	10	10007	7	2017-07-08 02:13:25.953
10	20	5	6	2017-07-08 02:25:14.577
11	10	5	6	2017-07-08 02:25:42.873
12	10	6	5	2017-07-09 12:50:26.587
13	20	6	5	2017-07-10 18:00:19.743
14	10	6	16	2017-07-10 18:00:40.573
15	10	10008	27	2017-07-12 12:33:55.66
16	20	5	6	2017-07-12 12:34:51.633
17	20	6	16	2017-07-12 12:35:53.537
18	10	6	26	2017-07-12 12:36:08.84
19	10	10009	12	2017-07-12 12:48:30.007
10015	20	10008	27	2017-07-16 21:14:52.91
10016	20	6	26	2017-07-17 10:32:01.527
10017	10	6	26	2017-07-17 10:32:20.837
10018	10	5	13	2018-09-14 10:06:05.85
10019	10	10008	16	2018-09-17 09:56:55.893
\.


                                                                                                                                                                               2438.dat                                                                                            0000600 0004000 0002000 00000003172 13353144341 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	10	20	الدوحه	10	\N	\N	\N	1	2017-01-01 00:00:00	2017-07-16 17:32:27.633
2	20	20	الخور	20	\N	\N	\N	1	2017-01-01 00:00:00	2017-07-18 05:18:16.047
5	470	20	ابوسمره	30	\N	\N	\N	1	2017-01-01 00:00:00	2017-07-18 05:16:59.077
7	460	20	\N	30	\N	\N	\N	1	2017-07-13 17:27:30.813	2017-07-18 06:16:56.253
8	30	10	الريان	70				1	2017-07-13 17:36:12.07	2017-07-13 17:36:12.07
9	40	30	الدوحه	80	ترمب الكلب	00000	\N	1	2017-07-13 17:37:05.097	2017-07-17 14:34:56.323
10	570	20	الدوجه	80	نرمب الكلب	000000	\N	1	2017-07-13 17:45:47.587	2017-07-18 05:09:50.647
11	10	20	* TRIAL *	10	\N	\N	\N	1	2017-07-13 23:36:07.203	2017-07-18 05:08:17.31
12	560	30	ماعرف	100	210	\N	\N	1	2017-07-14 16:08:53.63	2017-07-18 00:42:06.51
13	570	20	* TRIAL * 	10	\N	\N	\N	1	2017-07-14 20:14:41.81	2017-07-17 11:52:21.437
14	20	30	kkkk	15	\N	\N	\N	1	2017-07-17 09:45:05.513	2017-07-18 00:41:46.97
15	10	20	dfsfsdf	10	\N	\N	\N	1	2017-07-17 10:19:54.79	2017-07-17 12:52:54.467
16	10	20	sdfsdfsdfsf	15	\N	\N	\N	1	2017-07-17 12:52:42.753	2017-07-17 13:22:13.593
17	40	20	dsfsdfsdf	40	\N	\N	\N	6	2017-07-17 13:09:29.587	2017-07-18 06:16:34.413
18	20	20	* TRIAL * TR	15	\N	\N	\N	1	2017-07-17 13:20:13.777	2017-07-18 05:05:44.95
19	20	10	sdfsdfsdf	15	\N	\N	\N	1	2017-07-17 14:01:42.723	2017-07-17 14:01:42.723
20	40	10	hhhhhhhh	20	\N	\N	\N	6	2017-07-17 14:08:15.323	2017-07-17 14:08:15.323
21	40	20	sfdsfsdfsfd	15	\N	\N	\N	1	2017-07-18 00:29:44.927	2017-07-18 05:04:25.533
22	110	30	jjjjjjjjjj	1000	kkkkkkk		\N	6	2017-07-18 00:57:49.837	2017-07-22 19:36:09.477
23	20	10	* TRIAL 	10	\N	\N	\N	6	2017-07-18 05:02:14.857	2017-07-18 05:02:14.857
\.


                                                                                                                                                                                                                                                                                                                                                                                                      2443.dat                                                                                            0000600 0004000 0002000 00000027512 13353144341 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	9	haahahhahaha	6	2017-01-01 00:00:00
2	9	* TRIAL * TRIA	1	2017-01-01 00:00:00
3	9	fdfsfsdsdf	1	2017-07-13 21:53:52.107
4	9	* TRIAL * TRIAL * TRIA	1	2017-07-13 21:54:06.407
5	9	حررررررررررررررك بسررررعه يالتيس يالثور سيبسيبسيبسيب	1	2017-07-13 21:54:23.54
6	9	sdfsdfsdfsdf	1	2017-07-13 22:01:18.213
7	9	سيبسيبسيبسيبسيبسيبيسمنستيمبنتسيمنتبمنستينمبسيب	1	2017-07-13 22:11:35.68
8	1	مالت على البمبر	1	2017-07-13 23:13:18.42
9	1	مالت على البمببببببببر	1	2017-07-13 23:13:44.537
10	9	dsfsdfsdf	1	2017-07-13 23:35:06.58
11	10	dsfsdfsdfsdfsdfsdfsdfs	1	2017-07-13 23:39:36.66
12	7	sdfsdfsdfsdfs	1	2017-07-13 23:42:44.077
13	12	hahahahahhaha	1	2017-07-14 19:26:33.567
14	12	hahahahahhaha	1	2017-07-14 19:26:34.027
15	12	nice much faster	1	2017-07-14 19:26:55.91
16	12	* TRIAL * TRIAL 	1	2017-07-14 19:26:56.393
17	12	sdfsdfsdfsdfsdfsdf	1	2017-07-14 19:28:15.707
18	12	وجه الدورية في اسرع وقت .. لاتأخير ياكلب	1	2017-07-14 19:32:03.01
19	12	اوكي ياحمار	1	2017-07-14 19:32:08.62
20	12	* TRIAL * TRIAL * TRI	1	2017-07-14 19:32:15.47
21	12	كيف	1	2017-07-14 19:32:17.907
22	12	* TRIAL * T	1	2017-07-14 19:34:36.14
23	12	جب بس	1	2017-07-14 19:34:38.637
24	12	يه؟	1	2017-07-14 19:34:44.747
25	12	* TRIAL * TRIAL	1	2017-07-14 19:34:49.147
26	12	اي متسبب؟	1	2017-07-14 19:34:52.673
27	12	* TRIAL 	1	2017-07-14 19:34:55.017
28	12	* TRIAL * T	1	2017-07-14 19:34:58.013
29	12	كل تبن بس	1	2017-07-14 19:35:01.17
30	11	ليش مافي تعليقات اهني ان شاء الله؟	1	2017-07-14 19:42:52.58
31	11	* TRIAL * T	1	2017-07-14 19:42:58.597
32	11	لا والله.. احلف بس؟	1	2017-07-14 19:43:03.05
33	12	sdfsdfsdf	1	2017-07-14 19:47:42.577
34	12	sdfsdfsfsdfs	1	2017-07-14 19:47:44.88
35	12	* TRIAL * TR	1	2017-07-14 19:47:46.83
36	12	* TRIAL * TRIAL 	1	2017-07-14 19:47:49.403
37	12	* TRIAL * TRIAL * TRIA	1	2017-07-14 19:47:52.84
38	12	kkkkkkkk	1	2017-07-14 19:53:24.077
39	13	Admin فام باضافة البلاغ	1	2017-07-14 20:14:41.827
40	11	فام باغلاق البلاغ	1	2017-07-14 20:41:19.257
41	11	* TRIAL *	1	2017-07-14 21:00:58.263
42	11	* TRIAL * TRIAL *	1	2017-07-14 21:01:11.493
43	13	fdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg	1	2017-07-14 21:07:13.917
44	13	فام بتسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 16:19:30.563
45	12	فام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-16 16:26:24.723
46	1	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 100	1	2017-07-16 17:32:27.637
47	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 17:50:39.307
48	10	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-16 17:51:11.66
49	10	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 18:00:09.633
50	12	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 18:01:15.077
51	2	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 210	1	2017-07-16 18:01:19.033
52	13	فام بتسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 18:01:43.777
53	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-16 18:02:42.8
54	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 18:03:15.977
55	12	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-16 18:03:24.943
56	12	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-16 18:04:22.243
57	11	فام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-16 18:48:34.657
58	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 18:48:46.093
59	13	فام باغلاق البلاغ 	1	2017-07-16 18:48:57.33
60	13	فام بتسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 18:49:16.99
61	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 18:49:31.383
62	11	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 18:50:48.56
63	5	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 210	1	2017-07-16 18:53:05.517
64	5	* TRIAL * TRIAL * 	1	2017-07-16 18:53:05.54
65	5	فام باغلاق البلاغ 	1	2017-07-16 18:53:40.737
66	5	فام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-16 18:54:04.99
67	5	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 18:54:15.07
68	5	* TRIAL * TRIAL * 	1	2017-07-16 18:54:15.087
69	13	فام بتسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 18:55:21.693
70	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 111	1	2017-07-16 18:55:26.467
71	13	فام باغلاق البلاغ 	1	2017-07-16 18:55:26.477
72	13	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 18:58:11.987
73	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 18:58:20.31
74	12	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:03:44.277
75	12	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 19:03:54.54
76	13	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:19:41.93
77	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:19:47.203
78	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-16 19:23:08.583
79	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:23:13.547
80	13	فام باغلاق البلاغ 	1	2017-07-16 19:23:13.553
81	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-16 19:33:46.907
82	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 19:33:51.763
83	13	فام باغلاق البلاغ 	1	2017-07-16 19:33:51.767
84	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:35:20.903
85	13	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:35:29.38
86	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 19:37:00.08
87	13	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:37:21.95
88	13	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-16 19:37:28.117
89	13	* TRIAL * TRIAL * 	1	2017-07-16 19:37:28.123
90	13	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-16 19:38:29.117
91	14	فام باضافة البلاغ	1	2017-07-17 09:45:05.527
92	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-17 09:54:28.337
93	13	فام بتسليم البلاغ للدورية صاحبة النداء: 220	1	2017-07-17 10:03:59.643
94	13	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 220	1	2017-07-17 10:04:06.443
95	10	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-17 10:04:28.227
96	10	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-17 10:04:41.377
97	10	* TRIAL * TRIAL * 	1	2017-07-17 10:04:41.39
98	14	sdfsdfsdff	1	2017-07-17 10:17:05.033
99	14	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-17 10:18:16.623
100	14	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 220	1	2017-07-17 10:18:20.56
101	14	فام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-17 10:19:31.91
102	15	* TRIAL * TRIAL *	1	2017-07-17 10:19:54.797
103	15	sdfsfsdfsdfsf	1	2017-07-17 10:23:32.343
104	15	فام باغلاق البلاغ 	1	2017-07-17 10:24:05.3
105	15	البلاغ ماخلص	6	2017-07-17 11:19:11.807
106	15	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	6	2017-07-17 11:19:31.383
107	15	sdfsdfsdfsdf	6	2017-07-17 11:22:34.013
108	15	* TRIAL * T	1	2017-07-17 11:32:52.32
109	14	sdfsdfsdfsdfsdfsdfsdfsdf	1	2017-07-17 11:35:11.673
110	15	sdfsdfsdfsdfsdf	1	2017-07-17 11:47:31.76
111	14	sdfsdfsdfsdfsfsdfsdf	1	2017-07-17 11:48:18.407
112	13	sdfsdfsdfsdfsdf	1	2017-07-17 11:51:49.773
113	13	bbbbbbbbb	1	2017-07-17 11:52:21.437
114	9	* TRIAL * T	1	2017-07-17 12:02:58.013
115	16	فام باضافة البلاغ	1	2017-07-17 12:52:42.767
116	15	* TRIAL * TR	1	2017-07-17 12:52:54.46
117	17	فام باضافة البلاغ	6	2017-07-17 13:09:29.603
118	17	* TRIAL * TRIAL * 	6	2017-07-17 13:09:37.777
119	14	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	6	2017-07-17 13:10:43.99
120	17	* TRIAL * TRIAL	6	2017-07-17 13:11:13.28
121	17	sfdsdfsdfsdfsdf	1	2017-07-17 13:13:22.433
122	10	sdfsfsdfsdfsdfsdf	1	2017-07-17 13:13:33.98
123	17	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-17 13:13:57.993
124	17	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-17 13:14:25.773
125	17	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-17 13:14:38.557
126	17	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-17 13:14:43.977
127	17	* TRIAL * TRIAL * 	1	2017-07-17 13:14:43.99
128	17	sdfsdfsdfsdf	1	2017-07-17 13:14:50.797
129	16	sdfdsfsdfsf	1	2017-07-17 13:18:03.3
130	16	* TRIAL * TRIAL * 	1	2017-07-17 13:18:07.937
131	17	فام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-17 13:18:16.92
132	18	* TRIAL * TRIAL *	1	2017-07-17 13:20:13.783
133	18	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	1	2017-07-17 13:21:02.703
134	16	فام بتسليم البلاغ للدورية صاحبة النداء: 221	1	2017-07-17 13:21:28.61
135	18	فام بالغاء تسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-17 13:22:09.36
136	16	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-17 13:22:13.593
137	18	sdfsfsdfsdfsdfsdf	6	2017-07-17 13:51:11.97
138	17	sdfsfsdfsdfsdfsdff	1	2017-07-17 13:52:06.243
139	19	* TRIAL * TRIAL *	1	2017-07-17 14:01:42.74
140	20	فام باضافة البلاغ	6	2017-07-17 14:08:15.343
141	18	jjjjjjjjjjjjjjjjjjjjjjjjjjj	6	2017-07-17 14:08:40.913
142	9	فام باغلاق البلاغ 	1	2017-07-17 14:34:56.333
143	18	sdfsdfsdfsdsfsf	1	2017-07-18 00:29:29.81
144	21	فام باضافة البلاغ	1	2017-07-18 00:29:44.927
145	14	* TRIAL * TRIAL * 	1	2017-07-18 00:41:46.99
146	12	* TRIAL * TRIAL * 	1	2017-07-18 00:42:06.513
147	18	* TRIAL * TRIAL * 	1	2017-07-18 00:42:16.43
148	18	fdfgdfg	1	2017-07-18 00:43:00.843
149	18	sfdsfdsfdsdfsdfsdfdsfsdf	1	2017-07-18 00:43:21.993
150	22	فام باضافة البلاغ	6	2017-07-18 00:57:49.853
151	22	تم اتخاذ الاجراء اللازم.. بانتظار الرد من الجهه المعنيه	6	2017-07-18 00:58:11.15
152	22	فام بتسليم البلاغ للدورية صاحبة النداء: 110	1	2017-07-18 01:02:26.29
153	23	* TRIAL * TRIAL *	6	2017-07-18 05:02:14.873
154	21	jjjjjjjjjjjjjjjjj	6	2017-07-18 05:04:25.533
155	18	* TRIAL * TRI	7	2017-07-18 05:05:44.95
156	10	* TRIAL * TRIAL	7	2017-07-18 05:06:55.043
157	11	ggggggggggggg	7	2017-07-18 05:08:17.31
158	10	* TRIAL * TRI	7	2017-07-18 05:09:50.647
159	7	jjjjjjjjjjjjjjj	7	2017-07-18 05:11:37.52
160	5	dddddddd	7	2017-07-18 05:16:59.06
161	2	* TRIAL * TR	1	2017-07-18 05:18:16.047
162	17	* TRIAL *	1	2017-07-18 06:11:14.39
163	17	* TRIAL * T	1	2017-07-18 06:11:34.32
164	17	dddddddd	1	2017-07-18 06:16:34.413
165	7	sdfsdfsdfsdfsdf	1	2017-07-18 06:16:56.253
166	22	قام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-22 17:41:50.35
167	22	قام بالغاء تسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-22 17:41:54.227
168	22	قام بتسليم البلاغ للدورية صاحبة النداء: 112	1	2017-07-22 19:36:02.893
169	22	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *	1	2017-07-22 19:36:09.47
170	22	قام باغلاق البلاغ 	1	2017-07-22 19:36:09.487
\.


                                                                                                                                                                                      2428.dat                                                                                            0000600 0004000 0002000 00000001365 13353144341 0014257 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        10	موجة الدفاع المدني	0	\N	\N	\N	0	0	0
15	موجة أمن الجنوب	0	\N	\N	\N	0	0	0
20	موجة الفزعه	0	\N	\N	\N	0	0	0
30	موجة الخويا	0	\N	\N	\N	0	0	0
40	موجة أمن الشمال	0	\N	\N	\N	0	0	0
50	موجة خفر السواحل	0	\N	\N	\N	0	0	0
60	اتصال امن العاصمه أو الداخليه	2	الاسم	رقم الهاتف	\N	1	1	0
70	مرتب امن الدولة	2	* TRIAL * TRIAL * TRIAL	الاسم	رقم الهاتف	1	1	1
80	اتصال هاتفي	1	الاسم	رقم الهاتف	\N	1	1	0
90	انترنت	1	* TRIAL * TRIAL 	عنوان الموقع	\N	1	1	0
100	بلاغ من دورية الجهاز	1	النداء	\N	\N	1	0	0
1000	* TRIAL 	1	اسم المصدر	رقم الهاتف	\N	1	1	0
\.


                                                                                                                                                                                                                                                                           2435.dat                                                                                            0000600 0004000 0002000 00000000055 13353144341 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        10	جديد
20	* TRIAL * 
30	انتهى
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   2436.dat                                                                                            0000600 0004000 0002000 00000003735 13353144341 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        10	العثور على أسلحة وذخائر	10
20	تهديد بالسلاح - سلاح ابيض او آله حاده	10
30	* TRIAL 	10
40	داعش sdfsdfsdf	10
50	* TRIAL * TRI	10
60	حريق كبير	10
70	دخول مياه اقليميه	10
80	سرقه	10
90	سرقة بنك	10
100	عمله مزوره - أوراق مزوره	10
110	أشعار دخول شخص مطلوب لأمن الدوله	10
120	* TRIAL * TRIAL * TRIAL * TRIAL * T	10
130	دخول طائرة الأجواء القطرية	10
140	* TRIAL * 	10
150	* TRIAL * TR	10
160	العثور على جسم غريب	10
170	* TRIAL * TRIA	10
180	قتل	10
190	انتحار	10
200	مطارده	10
210	اشتباه في شخص	10
220	اشتباه في سياره	10
230	* TRIAL * TRIA	10
240	اضراب عن العمل	10
250	محاولة انتحار	10
260	انتحال شخصيه	10
270	شخص بحوزته مخدرات	10
280	* TRIAL * TRIAL * TRIAL * TRI	10
290	غريق	10
300	قمار	10
310	تصوير مناطق محظورة	10
320	تهريب	10
330	* TRIAL * 	10
340	تزوير	10
350	حادث دهس	10
360	مشاجره - اعتداء	10
370	اعتراض موكب سمو الأمير	10
380	مظاهرات - تجمع - تجمهر - تجمع سيارات	10
390	العثور على لقيط	10
400	أطلاق نار - صوت اطلاق نار	10
410	* TRIAL * TRIAL * TRIA	10
420	* TRIAL * TRIAL * TRIAL * 	10
430	كتابات مسيئه على حائط	10
440	كتابات وشعارات سياسيه	10
450	خطف او محاولة خطف	10
460	اغتصاب - لواط - خلوه محرمه	10
470	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T	10
480	منشورات	10
490	أوراق مبعثره	10
500	رشوه	10
510	* TRIAL * T	10
520	اقتحام	10
530	عمل ارهابي	10
540	شغب ملاعب	10
550	* TRIAL * TR	10
560	طائره بدوة طيار	10
570	حريق	10
580	غير مصنف 1	10
590	* TRIAL * 	10
600	غير مصنف 3	10
610	غير مصنف 4	10
620	جديد جديد	\N
630	sdfsdfsdfsdf	\N
640	* TRIAL * TR	\N
\.


                                   2444.dat                                                                                            0000600 0004000 0002000 00000000350 13353144341 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        7	6	2017-07-18 06:16:56.267
7	7	2017-07-18 06:16:56.267
7	8	2017-07-18 06:16:56.283
17	7	2017-07-18 06:16:34.45
17	8	2017-07-18 06:16:34.453
22	6	2017-07-22 19:36:09.49
22	7	2017-07-22 19:36:09.493
22	8	2017-07-22 19:36:09.497
\.


                                                                                                                                                                                                                                                                                        2445.dat                                                                                            0000600 0004000 0002000 00000000005 13353144341 0014244 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2446.dat                                                                                            0000600 0004000 0002000 00000000005 13353144341 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2449.dat                                                                                            0000600 0004000 0002000 00000076053 13353144341 0014270 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        21436	1	15	2017-07-16 16:16:13.057	1	تسجيل دخول: admin
21437	1	15	2017-07-16 16:19:23.113	1	تسجيل دخول: admin
21438	1	31	2017-07-16 16:19:30.597	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21439	1	31	2017-07-16 16:26:24.733	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21440	1	15	2017-07-16 16:41:30.673	1	تسجيل دخول: admin
21441	1	31	2017-07-16 16:43:08.31	3	الدورية في حالة لاتسمح باستلام بلاغ13
21442	1	15	2017-07-16 17:30:52.033	1	تسجيل دخول: admin
21443	1	15	2017-07-16 17:32:23.303	1	تسجيل دخول: admin
21444	1	32	2017-07-16 17:32:27.67	1	تم الغاء تسليم الدورية صاحبة النداء: 100  البلاغ رقم: 1
21445	1	15	2017-07-16 17:49:47.937	1	تسجيل دخول: admin
21446	1	32	2017-07-16 17:50:39.337	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 
21447	1	31	2017-07-16 17:51:11.67	1	تم تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 10
21448	1	15	2017-07-16 17:53:27.363	1	* TRIAL * TRIAL *
21449	1	15	2017-07-16 17:59:32.79	1	تسجيل دخول: admin
21450	1	32	2017-07-16 18:00:09.66	1	تم الغاء تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 10
21451	1	15	2017-07-16 18:01:01.637	1	* TRIAL * TRIAL *
21452	1	32	2017-07-16 18:01:15.107	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 
21453	1	32	2017-07-16 18:01:19.043	1	تم الغاء تسليم الدورية صاحبة النداء: 210  البلاغ رقم: 2
21454	1	31	2017-07-16 18:01:43.787	1	تم تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 13
21455	1	15	2017-07-16 18:02:35.917	1	* TRIAL * TRIAL *
21456	1	31	2017-07-16 18:02:42.83	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21457	1	32	2017-07-16 18:03:15.983	1	تم الغاء تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21458	1	31	2017-07-16 18:03:24.95	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21459	1	31	2017-07-16 18:03:44.283	3	الدورية في حالة لاتسمح باستلام بلاغ5
21460	1	32	2017-07-16 18:04:22.253	1	تم الغاء تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 12
21461	1	15	2017-07-16 18:48:08.497	1	* TRIAL * TRIAL *
21462	1	31	2017-07-16 18:48:34.683	1	تم تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 11
21463	1	32	2017-07-16 18:48:46.103	1	تم الغاء تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 13
21464	1	29	2017-07-16 18:48:46.133	4	* TRIAL * TRIAL * TRIAL *
21465	1	29	2017-07-16 18:48:57.33	1	قام باغلاق البلاغ: 13
21466	1	31	2017-07-16 18:49:16.997	1	تم تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 13
21467	1	32	2017-07-16 18:49:31.39	1	تم الغاء تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 13
21468	1	29	2017-07-16 18:49:31.403	4	* TRIAL * TRIAL * TRIAL *
21469	1	32	2017-07-16 18:50:48.573	1	تم الغاء تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 11
21470	1	15	2017-07-16 18:52:53.283	1	تسجيل دخول: admin
21471	1	32	2017-07-16 18:53:05.537	1	تم الغاء تسليم الدورية صاحبة النداء: 210  البلاغ رقم: 5
21472	1	29	2017-07-16 18:53:05.54	1	قام باغلاق البلاغ: 5
21473	1	29	2017-07-16 18:53:40.737	1	قام باغلاق البلاغ: 5
21474	1	31	2017-07-16 18:54:04.997	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *
21475	1	32	2017-07-16 18:54:15.083	1	تم الغاء تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 5
21476	1	29	2017-07-16 18:54:15.09	1	* TRIAL * TRIAL * TR
21477	1	31	2017-07-16 18:55:21.7	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21478	1	32	2017-07-16 18:55:26.477	1	تم الغاء تسليم الدورية صاحبة النداء: 111  البلاغ رقم: 13
21479	1	29	2017-07-16 18:55:26.477	1	* TRIAL * TRIAL * TRI
21480	1	15	2017-07-16 18:58:01.903	1	تسجيل دخول: admin
21481	1	31	2017-07-16 18:58:12.017	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21482	1	32	2017-07-16 18:58:20.317	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 
21483	1	29	2017-07-16 18:58:20.34	4	* TRIAL * TRIAL * TRIAL *
21484	1	31	2017-07-16 19:03:44.287	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 12
21485	1	32	2017-07-16 19:03:54.55	1	تم الغاء تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 12
21486	1	15	2017-07-16 19:19:30.61	1	تسجيل دخول: admin
21487	1	31	2017-07-16 19:19:41.957	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21488	1	32	2017-07-16 19:19:47.21	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 
21489	1	29	2017-07-16 19:19:47.227	4	Row not found or changed.
21490	1	15	2017-07-16 19:23:00.92	1	تسجيل دخول: admin
21491	1	31	2017-07-16 19:23:08.613	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21492	1	29	2017-07-16 19:23:13.563	1	قام باغلاق البلاغ: 13
21493	1	15	2017-07-16 19:33:20.797	1	تسجيل دخول: admin
21494	1	31	2017-07-16 19:33:46.923	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21495	1	29	2017-07-16 19:33:51.77	1	قام باغلاق البلاغ: 13
21496	1	32	2017-07-16 19:35:20.923	1	تم الغاء تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21497	1	31	2017-07-16 19:35:29.387	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21498	1	15	2017-07-16 19:36:51.917	1	* TRIAL * TRIAL *
21499	1	32	2017-07-16 19:37:00.107	1	تم الغاء تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21500	1	31	2017-07-16 19:37:21.953	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21501	1	29	2017-07-16 19:37:28.123	1	قام باغلاق البلاغ: 13
21502	1	31	2017-07-16 19:38:29.123	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21503	1	15	2017-07-16 19:44:14.927	1	تسجيل دخول: admin
21504	1	15	2017-07-16 19:46:57.643	1	تسجيل دخول: admin
21505	1	15	2017-07-16 19:47:41.413	1	تسجيل دخول: admin
21506	1	25	2017-07-16 19:47:57.843	1	عمليات تغيير حالة الفرد: 213 kkkkk
21507	1	15	2017-07-16 19:49:21.433	1	تسجيل دخول: admin
21508	1	25	2017-07-16 19:49:52.57	1	عمليات تغيير حالة الفرد: 213 kkkkk
21509	1	15	2017-07-16 19:53:34.9	1	تسجيل دخول: admin
21510	1	25	2017-07-16 19:53:43.997	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21511	1	25	2017-07-16 19:53:53.343	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21512	1	15	2017-07-16 19:58:40.003	1	تسجيل دخول: admin
21513	1	15	2017-07-16 20:01:27.4	1	* TRIAL * TRIAL *
21514	1	25	2017-07-16 20:01:34.58	1	عمليات تغيير حالة الفرد: 213 kkkkk
21515	1	25	2017-07-16 20:01:42.203	1	عمليات تغيير حالة الفرد: 213 kkkkk
21516	1	25	2017-07-16 20:01:44.213	1	عمليات تغيير حالة الفرد: 213 kkkkk
21517	1	25	2017-07-16 20:02:00.263	1	عمليات تغيير حالة الفرد: 213 kkkkk
21518	1	15	2017-07-16 20:04:56.6	1	تسجيل دخول: admin
21519	1	25	2017-07-16 20:05:00.893	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21520	1	25	2017-07-16 20:05:03.207	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21521	1	25	2017-07-16 20:05:19.85	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21522	1	25	2017-07-16 20:05:21.05	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21523	1	15	2017-07-16 20:07:29.823	1	* TRIAL * TRIAL *
21524	1	25	2017-07-16 20:07:37.427	1	عمليات تغيير حالة الفرد: 213 kkkkk
21525	1	25	2017-07-16 20:07:39.893	1	عمليات تغيير حالة الفرد: 213 kkkkk
21526	1	25	2017-07-16 20:08:12.023	1	عمليات تغيير حالة الفرد: 213 kkkkk
21527	1	15	2017-07-16 20:10:31.8	1	تسجيل دخول: admin
21528	1	25	2017-07-16 20:10:37.633	1	* TRIAL * TRIAL * TRIAL * TRIAL * 
21529	1	25	2017-07-16 20:10:39.65	1	عمليات تغيير حالة الفرد: 213 kkkkk
21530	1	25	2017-07-16 20:10:42.207	1	* TRIAL * TRIAL * TRIAL * TRIAL * 
21531	1	25	2017-07-16 20:10:51.907	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21532	1	25	2017-07-16 20:10:54.873	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21533	1	25	2017-07-16 20:10:56.56	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21534	1	25	2017-07-16 20:11:03.977	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21535	1	25	2017-07-16 20:11:27.55	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21536	1	25	2017-07-16 20:11:42.383	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21537	1	15	2017-07-16 20:20:05.12	1	تسجيل دخول: admin
21538	1	15	2017-07-16 20:20:13.3	1	* TRIAL * TRIAL *
21539	6	25	2017-07-16 20:20:49.427	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21540	1	15	2017-07-16 20:38:49.107	1	تسجيل دخول: admin
21541	1	25	2017-07-16 20:41:47.05	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIA
21542	1	25	2017-07-16 20:41:48.09	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIA
21543	1	25	2017-07-16 20:41:50.727	1	عمليات تغيير حالة الفرد: 1423 الملا
21544	1	25	2017-07-16 20:41:52.1	1	عمليات تغيير حالة الفرد: 1423 الملا
21545	1	15	2017-07-16 20:48:57.5	1	تسجيل دخول: turki
21546	6	24	2017-07-16 20:49:19.573	2	هذا المستخدم يملك حاليا اجهزة
21547	1	15	2017-07-16 20:54:20.953	1	تسجيل دخول: turki
21548	6	25	2017-07-16 20:54:39.42	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21549	6	25	2017-07-16 20:54:42.827	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21550	6	25	2017-07-16 20:54:45.987	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21551	6	25	2017-07-16 20:56:05.59	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21552	6	25	2017-07-16 20:56:06.263	1	عمليات تغيير حالة الفرد: 444 dfdfsdf
21553	1	15	2017-07-16 21:13:49.533	1	تسجيل دخول: turki
21554	6	22	2017-07-16 21:14:29.457	2	الدورية مستلمه لازالت مستلمه بلاغ-خاطب العمليات
21555	6	22	2017-07-16 21:14:52.933	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21556	1	15	2017-07-17 07:49:46.543	1	تسجيل دخول: admin
21557	1	15	2017-07-17 09:35:29.877	1	* TRIAL * TRIAL *
21558	1	25	2017-07-17 09:36:31.05	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21559	1	15	2017-07-17 09:44:39.057	1	تسجيل دخول: admin
21560	1	26	2017-07-17 09:45:05.533	1	تم اضافة البلاغ رقم: 14
21561	1	15	2017-07-17 09:49:20.057	1	* TRIAL * TRIAL *
21562	1	15	2017-07-17 09:53:40.117	1	* TRIAL * TRIAL *
21563	1	32	2017-07-17 09:54:28.363	1	تم الغاء تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 13
21564	1	15	2017-07-17 09:58:19.843	1	تسجيل دخول: admin
21565	1	31	2017-07-17 10:03:59.673	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21566	1	32	2017-07-17 10:04:06.447	1	تم الغاء تسليم الدورية صاحبة النداء: 220  البلاغ رقم: 13
21567	1	31	2017-07-17 10:04:28.237	1	تم تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 10
21568	1	29	2017-07-17 10:04:41.39	1	* TRIAL * TRIAL * TRI
21569	1	15	2017-07-17 10:15:52.073	1	* TRIAL * TRIAL *
21570	1	30	2017-07-17 10:17:05.05	1	تم اضافة تعليق جديد رقم: 98 على البلاغ رقم: 14
21571	1	31	2017-07-17 10:18:16.64	1	تم تسليم الدورية صاحبة النداء: 220  البلاغ رقم: 14
21572	1	32	2017-07-17 10:18:20.567	1	تم الغاء تسليم الدورية صاحبة النداء: 220  البلاغ رقم: 14
21573	1	31	2017-07-17 10:19:31.92	1	تم تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 14
21574	1	26	2017-07-17 10:19:54.797	1	تم اضافة البلاغ رقم: 15
21575	1	15	2017-07-17 10:20:56.993	1	تسجيل دخول: admin
21576	1	15	2017-07-17 10:23:18.17	1	تسجيل دخول: admin
21577	1	30	2017-07-17 10:23:32.36	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21578	1	29	2017-07-17 10:24:05.303	1	* TRIAL * TRIAL * TRI
21579	1	25	2017-07-17 10:24:28.927	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21580	1	25	2017-07-17 10:24:36.437	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21581	1	15	2017-07-17 10:29:50.653	1	* TRIAL * TRIAL *
21582	6	25	2017-07-17 10:31:06.303	1	عمليات تغيير حالة الفرد: 1423 الملا
21583	6	22	2017-07-17 10:32:01.553	1	تم الاستلام من الفرد: 1423 الملا  الدورية رقم: 46187 والجهاز رقم: 5303014
21584	6	21	2017-07-17 10:32:20.847	1	تم تسليم الفرد: 1423 الملا  الدورية رقم: 46187 والجهاز رقم: 5303014
21585	6	18	2017-07-17 10:32:42.023	1	* TRIAL * TRIAL * TRIAL * TR
21586	1	15	2017-07-17 10:39:45.033	1	* TRIAL * TRIAL *
21587	6	19	2017-07-17 10:40:31.603	1	* TRIAL * TRIAL * TRIAL
21588	1	15	2017-07-17 11:18:54.67	1	تسجيل دخول: turki
21589	6	30	2017-07-17 11:19:11.853	1	تم اضافة تعليق جديد رقم: 105 على البلاغ رقم: 15
21590	6	30	2017-07-17 11:19:31.423	1	تم اضافة تعليق جديد رقم: 106 على البلاغ رقم: 15
21591	6	30	2017-07-17 11:22:34.033	1	تم اضافة تعليق جديد رقم: 107 على البلاغ رقم: 15
21592	1	15	2017-07-17 11:24:49.187	1	تسجيل دخول: turki
21593	1	15	2017-07-17 11:31:03.293	1	تسجيل دخول: admin
21594	1	30	2017-07-17 11:32:52.373	1	تم اضافة تعليق جديد رقم: 108 على البلاغ رقم: 15
21595	1	30	2017-07-17 11:35:11.697	1	تم اضافة تعليق جديد رقم: 109 على البلاغ رقم: 14
21596	1	15	2017-07-17 11:40:49.807	1	تسجيل دخول: admin
21597	1	15	2017-07-17 11:43:25.2	1	تسجيل دخول: admin
21598	1	15	2017-07-17 11:44:49.33	1	تسجيل دخول: admin
21599	1	15	2017-07-17 11:45:28.99	1	تسجيل دخول: admin
21600	1	15	2017-07-17 11:47:25.25	1	* TRIAL * TRIAL *
21601	1	30	2017-07-17 11:47:31.827	1	تم اضافة تعليق جديد رقم: 110 على البلاغ رقم: 15
21602	1	30	2017-07-17 11:48:18.44	1	تم اضافة تعليق جديد رقم: 111 على البلاغ رقم: 14
21603	1	15	2017-07-17 11:51:02.203	1	تسجيل دخول: admin
21604	1	30	2017-07-17 11:51:49.84	1	تم اضافة تعليق جديد رقم: 112 على البلاغ رقم: 13
21605	1	30	2017-07-17 11:52:21.467	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21606	1	15	2017-07-17 11:59:27.787	1	تسجيل دخول: admin
21607	1	15	2017-07-17 12:02:10.433	1	* TRIAL * TRIAL *
21608	1	30	2017-07-17 12:02:58.067	1	تم اضافة تعليق جديد رقم: 114 على البلاغ رقم: 9
21609	1	15	2017-07-17 12:45:54.95	1	تسجيل دخول: admin
21610	1	15	2017-07-17 12:47:23.503	1	* TRIAL * TRIAL *
21611	1	26	2017-07-17 12:52:42.77	1	تم اضافة البلاغ رقم: 16
21612	1	30	2017-07-17 12:52:54.53	1	تم اضافة تعليق جديد رقم: 116 على البلاغ رقم: 15
21613	1	15	2017-07-17 12:59:57.957	1	تسجيل دخول: admin
21614	1	15	2017-07-17 13:09:15.19	1	تسجيل دخول: turki
21615	6	26	2017-07-17 13:09:29.607	1	تم اضافة البلاغ رقم: 17
21616	6	30	2017-07-17 13:09:37.803	1	تم اضافة تعليق جديد رقم: 118 على البلاغ رقم: 17
21617	6	32	2017-07-17 13:10:44.017	1	تم الغاء تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 14
21618	6	30	2017-07-17 13:11:13.307	1	تم اضافة تعليق جديد رقم: 120 على البلاغ رقم: 17
21619	1	15	2017-07-17 13:13:15.953	1	* TRIAL * TRIAL *
21620	1	30	2017-07-17 13:13:22.483	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21621	1	30	2017-07-17 13:13:34	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21622	1	31	2017-07-17 13:13:58.037	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 17
21623	1	32	2017-07-17 13:14:25.807	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 
21624	1	31	2017-07-17 13:14:38.583	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21625	1	29	2017-07-17 13:14:44.02	1	قام باغلاق البلاغ: 17
21626	1	30	2017-07-17 13:14:50.823	1	تم اضافة تعليق جديد رقم: 128 على البلاغ رقم: 17
21627	1	15	2017-07-17 13:17:50.197	1	تسجيل دخول: admin
21628	1	30	2017-07-17 13:18:03.353	1	تم اضافة تعليق جديد رقم: 129 على البلاغ رقم: 16
21629	1	29	2017-07-17 13:18:07.97	1	* TRIAL * TRIAL * TRI
21630	1	31	2017-07-17 13:18:16.96	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21631	1	26	2017-07-17 13:20:13.783	1	تم اضافة البلاغ رقم: 18
21632	1	31	2017-07-17 13:21:02.727	1	تم تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 18
21633	1	31	2017-07-17 13:21:14.863	3	الدورية في حالة لاتسمح باستلام بلاغ18
21634	1	31	2017-07-17 13:21:28.65	1	تم تسليم الدورية صاحبة النداء: 221  البلاغ رقم: 16
21635	1	25	2017-07-17 13:21:46.38	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21636	1	25	2017-07-17 13:21:48.423	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21637	1	25	2017-07-17 13:21:50.05	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21638	1	25	2017-07-17 13:21:51.15	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21639	1	25	2017-07-17 13:21:52.36	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21640	1	25	2017-07-17 13:21:54.833	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21720	1	15	2017-07-18 05:15:49.92	1	تسجيل دخول: zgggg
21641	1	25	2017-07-17 13:21:55.093	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21642	1	25	2017-07-17 13:21:56.467	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21643	1	25	2017-07-17 13:21:57.56	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21644	1	25	2017-07-17 13:21:59.01	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21645	1	32	2017-07-17 13:22:09.393	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 
21646	1	32	2017-07-17 13:22:13.617	1	تم الغاء تسليم الدورية صاحبة النداء: 221  البلاغ رقم: 16
21647	1	15	2017-07-17 13:33:29.57	1	تسجيل دخول: admin
21648	1	15	2017-07-17 13:42:40.78	1	* TRIAL * TRIAL *
21649	1	15	2017-07-17 13:49:33.767	1	تسجيل دخول: admin
21650	1	15	2017-07-17 13:50:23.817	1	* TRIAL * TRIAL *
21651	1	15	2017-07-17 13:50:57.767	1	تسجيل دخول: turki
21652	6	30	2017-07-17 13:51:11.997	1	تم اضافة تعليق جديد رقم: 137 على البلاغ رقم: 18
21653	1	30	2017-07-17 13:52:06.287	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21654	1	15	2017-07-17 13:54:51.19	1	تسجيل دخول: admin
21655	1	26	2017-07-17 14:01:42.747	1	تم اضافة البلاغ رقم: 19
21656	1	15	2017-07-17 14:01:54.147	1	* TRIAL * TRIAL *
21657	1	15	2017-07-17 14:07:03.44	1	تسجيل دخول: admin
21658	1	15	2017-07-17 14:07:15.193	1	تسجيل دخول: turki
21659	6	26	2017-07-17 14:08:15.367	1	تم اضافة البلاغ رقم: 20
21660	6	30	2017-07-17 14:08:40.953	1	تم اضافة تعليق جديد رقم: 141 على البلاغ رقم: 18
21661	1	15	2017-07-17 14:13:10.247	1	تسجيل دخول: admin
21662	1	15	2017-07-17 14:15:58.627	1	* TRIAL * TRIAL *
21663	1	15	2017-07-17 14:26:42.407	1	تسجيل دخول: admin
21664	1	15	2017-07-17 14:27:42.553	1	* TRIAL * TRIAL *
21665	1	15	2017-07-17 14:29:25.563	1	تسجيل دخول: admin
21666	1	15	2017-07-17 14:30:27.83	1	تسجيل دخول: admin
21667	1	15	2017-07-17 14:31:14.793	1	تسجيل دخول: admin
21668	1	15	2017-07-17 14:33:10.91	1	تسجيل دخول: admin
21669	1	25	2017-07-17 14:34:44.047	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21670	1	29	2017-07-17 14:34:56.383	1	قام باغلاق البلاغ: 9
21671	1	15	2017-07-17 15:03:49.07	1	تسجيل دخول: turki
21672	1	15	2017-07-17 23:01:00.727	1	تسجيل دخول: turki
21673	1	15	2017-07-17 23:01:30.21	1	تسجيل دخول: turki
21674	1	15	2017-07-17 23:27:42.11	1	تسجيل دخول: admin
21675	1	15	2017-07-17 23:31:43.353	1	* TRIAL * TRIAL *
21676	1	15	2017-07-17 23:32:48.39	1	تسجيل دخول: admin
21677	1	15	2017-07-17 23:39:29.047	1	تسجيل دخول: admin
21680	1	15	2017-07-17 23:50:49.953	1	تسجيل دخول: admin
21682	1	15	2017-07-17 23:52:25.497	1	* TRIAL * TRIAL *
21684	1	15	2017-07-17 23:53:47.42	1	* TRIAL * TRIAL *
21685	1	34	2017-07-17 23:53:56.277	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * T
21686	1	33	2017-07-17 23:54:23.673	1	قام باضافة نوع البلاغ: سبسيبسيبسيبي بالرقم: 640
21687	1	15	2017-07-18 00:29:05.227	1	تسجيل دخول: admin
21688	1	30	2017-07-18 00:29:29.87	1	تم اضافة تعليق جديد رقم: 143 على البلاغ رقم: 18
21689	1	26	2017-07-18 00:29:44.94	1	تم اضافة البلاغ رقم: 21
21690	1	15	2017-07-18 00:40:44.073	1	تسجيل دخول: admin
21691	1	29	2017-07-18 00:41:47.047	1	قام باغلاق البلاغ: 14
21692	1	29	2017-07-18 00:42:06.533	1	قام باغلاق البلاغ: 12
21693	1	29	2017-07-18 00:42:16.46	1	* TRIAL * TRIAL * TRI
21694	1	30	2017-07-18 00:43:00.873	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21695	1	30	2017-07-18 00:43:22.01	1	تم اضافة تعليق جديد رقم: 149 على البلاغ رقم: 18
21696	1	15	2017-07-18 00:54:05.717	1	تسجيل دخول: turki
21697	6	25	2017-07-18 00:55:44.34	1	* TRIAL * TRIAL * TRIAL * TRIAL * T
21698	6	25	2017-07-18 00:55:46.71	1	عمليات تغيير حالة الفرد: 1423 الملا
21699	6	25	2017-07-18 00:55:49.747	1	* TRIAL * TRIAL * TRIAL * TRIAL * T
21700	6	25	2017-07-18 00:55:52.303	1	عمليات تغيير حالة الفرد: 1423 الملا
21701	6	25	2017-07-18 00:55:55.433	1	عمليات تغيير حالة الفرد: 1423 الملا
21702	6	25	2017-07-18 00:55:59.09	1	* TRIAL * TRIAL * TRIAL * TRIAL * T
21703	6	26	2017-07-18 00:57:49.87	1	تم اضافة البلاغ رقم: 22
21704	6	30	2017-07-18 00:58:11.187	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21705	1	15	2017-07-18 01:01:40.617	1	* TRIAL * TRIAL *
21706	1	31	2017-07-18 01:02:26.323	1	تم تسليم الدورية صاحبة النداء: 110  البلاغ رقم: 22
21707	1	15	2017-07-18 01:47:50.07	1	تسجيل دخول: turki
21708	1	15	2017-07-18 05:02:01.313	1	تسجيل دخول: turki
21709	6	26	2017-07-18 05:02:14.903	1	تم اضافة البلاغ رقم: 23
21710	1	15	2017-07-18 05:03:14.237	1	* TRIAL * TRIAL *
21711	1	15	2017-07-18 05:04:14.947	1	تسجيل دخول: turki
21712	6	30	2017-07-18 05:04:25.607	1	تم اضافة تعليق جديد رقم: 154 على البلاغ رقم: 21
21713	1	15	2017-07-18 05:04:42.64	1	تسجيل دخول: zgggg
21714	7	30	2017-07-18 05:05:44.98	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21715	7	30	2017-07-18 05:06:55.077	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21716	7	30	2017-07-18 05:08:17.35	1	تم اضافة تعليق جديد رقم: 157 على البلاغ رقم: 11
21717	7	30	2017-07-18 05:11:14.79	1	تم اضافة تعليق جديد رقم: 158 على البلاغ رقم: 10
21718	7	30	2017-07-18 05:13:58.267	1	تم اضافة تعليق جديد رقم: 159 على البلاغ رقم: 7
21719	1	15	2017-07-18 05:15:38.497	6	* TRIAL * TRIAL * TRIAL * 
21721	1	15	2017-07-18 05:16:48.773	1	تسجيل دخول: zgggg
21722	7	30	2017-07-18 05:16:59.13	1	تم اضافة تعليق جديد رقم: 160 على البلاغ رقم: 5
21723	1	15	2017-07-18 05:17:59.507	1	تسجيل دخول: admin
21724	1	15	2017-07-18 06:11:01.887	1	تسجيل دخول: admin
21725	1	30	2017-07-18 06:11:30.09	1	تم اضافة تعليق جديد رقم: 162 على البلاغ رقم: 17
21726	1	30	2017-07-18 06:11:56.837	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21727	1	15	2017-07-18 06:14:46.267	1	تسجيل دخول: admin
21728	1	15	2017-07-18 06:16:18.307	1	تسجيل دخول: admin
21729	1	30	2017-07-18 06:16:34.453	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL
21730	1	30	2017-07-18 06:16:56.283	1	تم اضافة تعليق جديد رقم: 165 على البلاغ رقم: 7
21731	1	15	2017-07-19 14:57:01.357	1	* TRIAL * TRIAL *
21732	1	15	2017-07-21 14:55:31.443	1	تسجيل دخول: turki
21733	1	15	2017-07-21 15:59:39.35	1	* TRIAL * TRIAL *
21734	1	15	2017-07-21 16:01:29.84	1	تسجيل دخول: admin
21735	1	15	2017-07-21 16:15:19.057	1	تسجيل دخول: admin
21736	1	15	2017-07-21 16:17:42.177	1	تسجيل دخول: admin
21737	1	15	2017-07-21 16:25:31.76	1	تسجيل دخول: admin
21738	1	15	2017-07-22 17:20:56.907	1	تسجيل دخول: admin
21739	1	15	2017-07-22 17:35:38.53	1	* TRIAL * TRIAL *
21740	1	15	2017-07-22 17:41:05.29	1	تسجيل دخول: admin
21741	1	25	2017-07-22 17:41:17.983	1	عمليات تغيير حالة الفرد: 1423 الملا
21742	1	25	2017-07-22 17:41:19.637	1	عمليات تغيير حالة الفرد: 1423 الملا
21743	1	25	2017-07-22 17:41:21.13	1	عمليات تغيير حالة الفرد: 1423 الملا
21744	1	25	2017-07-22 17:41:22.32	1	عمليات تغيير حالة الفرد: 1423 الملا
21745	1	25	2017-07-22 17:41:23.447	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21746	1	25	2017-07-22 17:41:24.697	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21747	1	25	2017-07-22 17:41:25.82	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21748	1	25	2017-07-22 17:41:26.773	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21749	1	25	2017-07-22 17:41:28.067	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21750	1	25	2017-07-22 17:41:29.113	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21751	1	25	2017-07-22 17:41:30.227	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21752	1	31	2017-07-22 17:41:44.433	3	الدورية في حالة لاتسمح باستلام بلاغ22
21753	1	31	2017-07-22 17:41:50.397	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * 
21754	1	32	2017-07-22 17:41:54.233	1	تم الغاء تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 22
21755	1	15	2017-07-22 17:45:51.85	1	* TRIAL * TRIAL *
21756	1	15	2017-07-22 17:49:42.37	1	* TRIAL * TRIAL *
21757	1	25	2017-07-22 17:52:39.3	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21758	1	25	2017-07-22 17:52:40.273	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21759	1	25	2017-07-22 17:52:41.15	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21760	1	25	2017-07-22 17:52:42.073	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21761	1	25	2017-07-22 17:52:42.85	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21762	1	25	2017-07-22 17:52:44.563	1	* TRIAL * TRIAL * TRIAL * TRIAL * TR
21763	1	15	2017-07-22 17:58:09.977	1	تسجيل دخول: admin
21764	1	15	2017-07-22 18:02:23.887	1	* TRIAL * TRIAL *
21765	1	15	2017-07-22 18:42:59.797	1	تسجيل دخول: admin
21766	1	15	2017-07-22 18:57:31.127	1	تسجيل دخول: admin
21767	1	15	2017-07-22 19:26:06.003	1	تسجيل دخول: admin
21768	1	15	2017-07-22 19:27:40.037	1	تسجيل دخول: admin
21769	1	25	2017-07-22 19:30:39.157	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21770	1	25	2017-07-22 19:30:51.53	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21771	1	15	2017-07-22 19:35:50.217	1	* TRIAL * TRIAL *
21772	1	31	2017-07-22 19:36:02.963	1	تم تسليم الدورية صاحبة النداء: 112  البلاغ رقم: 22
21773	1	29	2017-07-22 19:36:09.497	1	قام باغلاق البلاغ: 22
21774	1	15	2017-07-22 19:52:46.317	1	تسجيل دخول: admin
21775	1	15	2017-07-22 20:01:26.047	1	تسجيل دخول: admin
21776	1	15	2018-09-11 13:18:13.53	6	خطا في كلمة المرور للمستخدم: admin
21777	1	15	2018-09-11 13:18:39.823	6	لايوجد مستخدم بالاسم: gggggg
21778	1	15	2018-09-11 13:23:18.78	1	تسجيل دخول: admin
21779	1	15	2018-09-11 13:29:03.603	1	تسجيل دخول: turki
21780	6	18	2018-09-11 13:45:55.39	2	هذا الفرد موجود مسبقا، لايمكن اضافته مرة اخرى: 543 rfertertert
21781	1	15	2018-09-12 06:46:51.363	1	* TRIAL * TRIAL *
21782	1	15	2018-09-12 06:47:15.463	1	تسجيل دخول: turki
21783	1	15	2018-09-12 07:39:04.913	1	تسجيل دخول: turki
21784	1	15	2018-09-12 09:33:38.32	1	تسجيل دخول: admin
21785	1	15	2018-09-12 09:34:21.51	1	* TRIAL * TRIAL *
21786	1	15	2018-09-12 09:34:38.143	1	تسجيل دخول: turki
21787	1	15	2018-09-12 09:40:22.81	1	تسجيل دخول: zgggg
21788	1	15	2018-09-12 09:40:43.23	1	تسجيل دخول: turki
21789	1	15	2018-09-13 10:05:40.42	1	* TRIAL * TRIAL *
21790	1	15	2018-09-14 08:43:28.763	1	تسجيل دخول: turki
21791	6	18	2018-09-14 09:29:51.99	2	هذا الفرد موجود مسبقا، لايمكن اضافته مرة اخرى: 23423 عبدالله
21792	6	19	2018-09-14 09:31:08.673	1	تم حذف الفرد: 543 rfertertert
21793	6	18	2018-09-14 09:32:08.237	2	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TR
21794	6	19	2018-09-14 09:32:24.04	1	تم حذف الفرد: 11111 sfsdgsg
21795	6	18	2018-09-14 09:32:50.603	1	تم اضافة الفرد: 11111 sfsdgsg
21796	6	24	2018-09-14 09:40:08.453	1	احوال تغيير حالة الفرد: 11111 sfsdgsg
21797	6	19	2018-09-14 10:04:51.91	1	* TRIAL * TRIAL * TRIAL * T
21798	6	18	2018-09-14 10:04:59.877	1	تم اضافة الفرد: 11111 sfsdgsg
21799	6	21	2018-09-14 10:06:05.9	1	تم تسليم الفرد: 11111 sfsdgsg  الدورية رقم: 531911 والجهاز رقم: 5303030
21800	6	25	2018-09-14 10:39:03.943	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIA
21801	6	25	2018-09-14 10:39:13.067	1	* TRIAL * TRIAL * TRIAL * TRIAL * TRIA
21802	6	25	2018-09-14 10:39:19.107	1	عمليات تغيير حالة الفرد: 11111 sfsdgsg
21803	6	25	2018-09-14 10:39:21.047	1	عمليات تغيير حالة الفرد: 11111 sfsdgsg
21804	1	15	2018-09-17 09:39:16.213	6	خطا في كلمة المرور للمستخدم: turki
21805	1	15	2018-09-17 09:39:16.4	6	* TRIAL * TRIAL * TRIAL * TRIAL * 
21806	1	15	2018-09-17 09:39:54.033	6	خطا في كلمة المرور للمستخدم: turki
21807	1	15	2018-09-17 09:43:42.187	1	* TRIAL * TRIAL *
21808	6	19	2018-09-17 09:53:40.293	1	تم حذف الفرد: 394 dsfsggg
21809	6	18	2018-09-17 09:54:37.523	1	تم اضافة الفرد: 394 dsfsggg
21810	6	21	2018-09-17 09:56:55.957	1	تم تسليم الفرد: 394 dsfsggg  الدورية رقم: sdfdsfsdfdf والجهاز رقم: 5301011
21811	1	15	2018-09-17 10:15:13.957	1	تسجيل دخول: turki
21812	1	15	2018-09-17 10:25:33.097	1	* TRIAL * TRIAL *
21813	6	25	2018-09-17 11:00:30.827	1	عمليات تغيير حالة الفرد: 2342 dfdfdf
21814	1	15	2018-09-18 11:18:57.937	1	* TRIAL * TRIAL *
21815	6	25	2018-09-18 12:30:00.197	1	عمليات تغيير حالة الفرد: 1423 الملا
21816	6	25	2018-09-18 12:30:09.603	1	* TRIAL * TRIAL * TRIAL * TRIAL * T
21817	1	15	2018-09-18 14:06:20.54	1	تسجيل دخول: turki
21818	6	18	2018-09-18 14:08:31.203	2	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL *
21819	1	15	2018-09-19 07:01:22.153	1	تسجيل دخول: turki
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     2447.dat                                                                                            0000600 0004000 0002000 00000002047 13353144341 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	أضافه مستخدم جديد
2	* TRIAL * TRIAL * T
3	* TRIAL * 
4	* TRIAL * TRIAL * TRI
5	* TRIAL * TRIAL * T
6	* TRIAL * TRIA
7	تعديل بيانات فرد جديد
8	حذف فرد
9	اضافة دورية جديدة
10	تعديل بيانات دورية
11	حذف دورية
12	اضافة لاسلكي جديد
13	تعديل بيانات لاسلكي
14	حذف جهاز لاسلكي
15	* TRIAL * 
16	* TRIAL * 
17	تعديل كلمة المرور للمستخدم
18	اضافة شخص جديد للكشف
19	حذف شخص من الكشف
20	تعديل شخص في الكشف
21	تسليم شخص دورية وجهاز
22	استلام من شخص دورية وجهاز
23	طلب جميع بيانات الكشف
24	أحوال تغيير حالة الشخص
25	عمليات تغيير حالة الشخص
26	* TRIAL * TRIAL
27	تعديل بلاغ
28	حذف بلاغ
29	اغلاق بلاغ
30	اضافه تعليق على بلاغ
31	* TRIAL * TRIAL * T
32	* TRIAL * TRIAL * TRIAL 
33	اضافة نوع بلاغ جديد
34	تحرير نوع بلاغ
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         2448.dat                                                                                            0000600 0004000 0002000 00000000120 13353144341 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	SUCCESS
2	ERROR
3	UNAUTHORIZED
4	UnKnownError
5	* TRIAL * TR
6	* TRIAL *
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                2429.dat                                                                                            0000600 0004000 0002000 00000000565 13353144341 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        11	1	46187	PAT46187	2014	* TRIAL * TR		0	0
12	1	73596	PAT73596	2014	نيسان باترول		0	0
13	1	532422	* TRIAL *	2014	* TRIAL * TR		0	0
14	1	616273	* TRIAL *	2014	* TRIAL * TR		0	0
16	1	531911	PAT531911	2014	نيسان باترول		0	0
17	1	616265	PAT616265	2014	نيسان باترول		0	0
10022	1	sdfdsfsdfdf	* TRIAL * TRIA	2014	نيسان باترول		0	0
\.


                                                                                                                                           2450.dat                                                                                            0000600 0004000 0002000 00000001532 13353144341 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	10	12	2	2017-07-01 00:00:00
2	20	12	2	2017-07-02 00:00:00
3	10	11	4	2017-07-04 14:17:00.233
4	20	11	4	2017-07-04 16:48:22.28
5	10	11	19	2017-07-06 22:00:15.007
6	10	12	4	2017-07-07 21:08:29.087
7	20	12	4	2017-07-07 21:09:24.23
8	10	11	6	2017-07-07 23:20:42.7
9	10	17	7	2017-07-08 02:13:25.953
10	20	11	6	2017-07-08 02:25:14.577
11	10	11	6	2017-07-08 02:25:42.873
12	10	13	5	2017-07-09 12:50:26.587
13	20	13	5	2017-07-10 18:00:19.723
14	10	16	16	2017-07-10 18:00:40.573
15	10	10022	27	2017-07-12 12:33:55.657
16	20	11	6	2017-07-12 12:34:51.633
17	20	16	16	2017-07-12 12:35:53.537
18	10	11	26	2017-07-12 12:36:08.84
19	10	12	12	2017-07-12 12:48:30.007
10015	20	10022	27	2017-07-16 21:14:52.903
10016	20	11	26	2017-07-17 10:32:01.523
10017	10	11	26	2017-07-17 10:32:20.837
10018	10	16	13	2018-09-14 10:06:05.843
10019	10	10022	16	2018-09-17 09:56:55.887
\.


                                                                                                                                                                      2451.dat                                                                                            0000600 0004000 0002000 00000016647 13353144341 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	6	6	50	2017-07-08 02:25:14.59
3	6	6	20	2017-07-08 02:25:42.873
4	6	15	80	2017-07-08 02:42:54.753
5	6	15	90	2017-07-08 02:43:12.89
6	6	15	100	2017-07-08 02:43:18.653
7	6	16	80	2017-07-08 02:55:44.44
8	6	16	100	2017-07-08 02:55:52.333
9	6	6	70	2017-07-08 13:07:10.323
10	6	6	40	2017-07-08 13:07:31.11
11	6	6	70	2017-07-08 13:07:41.667
12	6	6	40	2017-07-08 13:07:46.507
13	6	6	70	2017-07-08 13:07:50.307
14	6	6	30	2017-07-08 13:13:08.237
15	6	6	70	2017-07-08 13:13:16.77
16	6	6	30	2017-07-08 13:13:49.27
17	6	6	60	2017-07-08 13:27:26.157
18	6	6	40	2017-07-08 13:27:38.087
19	6	6	70	2017-07-08 13:27:41.283
20	6	6	30	2017-07-08 13:27:50.223
21	6	6	60	2017-07-08 13:28:02.333
22	6	6	40	2017-07-08 13:28:05.647
23	6	6	70	2017-07-08 13:28:12.04
24	6	6	30	2017-07-08 13:28:15.3
25	1	6	60	2017-07-08 13:31:51.59
26	1	6	40	2017-07-08 13:31:55.3
27	6	24	40	2017-07-09 10:35:02.977
28	6	23	30	2017-07-09 10:35:08.027
29	6	23	70	2017-07-09 10:35:13.71
30	6	3	80	2017-07-09 12:48:17.957
31	6	5	20	2017-07-09 12:50:26.617
32	6	24	80	2017-07-09 12:50:38.853
33	6	5	60	2017-07-09 13:32:40.393
34	6	6	70	2017-07-09 13:32:44.56
35	6	6	30	2017-07-09 14:38:57.23
36	6	6	70	2017-07-09 14:39:01.03
37	6	6	30	2017-07-09 16:50:46.54
38	6	5	40	2017-07-09 16:50:49.077
39	6	5	70	2017-07-09 16:50:51.927
40	6	5	30	2017-07-09 16:50:54.04
41	6	5	60	2017-07-09 16:50:57.33
42	6	5	40	2017-07-09 16:50:59.457
43	6	6	70	2017-07-09 16:51:00.51
44	6	6	30	2017-07-09 16:51:06.753
45	6	6	60	2017-07-09 16:51:08.677
46	6	6	40	2017-07-09 16:51:10.677
47	6	7	70	2017-07-09 16:51:12.623
48	6	7	30	2017-07-09 16:51:14.48
49	6	23	30	2017-07-09 16:51:36.887
50	6	23	70	2017-07-09 16:51:53.613
51	6	23	30	2017-07-09 16:51:55.8
52	6	7	60	2017-07-09 16:55:20.107
53	6	7	40	2017-07-09 16:55:23.16
54	6	6	70	2017-07-09 16:55:45.867
55	6	6	30	2017-07-09 16:55:46.943
56	6	5	60	2017-07-09 16:55:48.193
57	6	5	40	2017-07-09 16:55:49.2
58	6	6	70	2017-07-09 17:00:41.43
59	6	6	30	2017-07-09 17:00:43.963
60	6	5	60	2017-07-09 17:00:46.547
61	6	5	40	2017-07-09 17:00:48.713
62	6	6	70	2017-07-09 17:00:49.887
63	6	23	60	2017-07-09 17:47:34.367
64	6	23	40	2017-07-09 17:47:35.557
65	6	5	70	2017-07-09 17:47:37.33
66	6	5	30	2017-07-09 17:47:38.867
67	6	6	30	2017-07-09 17:47:40.283
68	6	6	60	2017-07-09 17:47:42.593
69	6	6	40	2017-07-09 17:47:44.05
70	6	7	60	2017-07-09 17:47:50.033
71	6	7	40	2017-07-09 17:47:51.723
72	1	23	70	2017-07-10 13:02:25.29
73	1	23	30	2017-07-10 13:02:26.867
74	1	23	60	2017-07-10 13:02:28.407
75	1	23	40	2017-07-10 13:02:29.413
76	6	5	50	2017-07-10 18:00:19.763
77	6	16	20	2017-07-10 18:00:40.573
78	6	16	70	2017-07-10 18:00:55.88
79	6	16	30	2017-07-10 18:00:57.633
80	6	16	60	2017-07-10 18:00:58.653
81	6	16	40	2017-07-10 18:01:18.313
82	6	16	70	2017-07-10 18:02:30.5
83	6	16	30	2017-07-10 18:02:31.613
84	6	16	60	2017-07-10 18:02:32.39
85	6	16	40	2017-07-10 18:03:29.653
86	6	23	70	2017-07-11 14:05:59.82
87	6	23	30	2017-07-11 14:06:00.667
88	6	23	60	2017-07-11 14:06:01.463
89	6	23	40	2017-07-11 14:06:02.23
90	6	23	70	2017-07-11 14:06:03.027
91	6	23	30	2017-07-11 14:06:03.7
92	6	23	60	2017-07-11 14:06:04.437
93	6	23	40	2017-07-11 14:06:05.33
94	6	23	70	2017-07-11 14:06:06.05
95	6	23	30	2017-07-11 14:06:06.943
96	6	6	70	2017-07-11 14:06:08.247
97	6	6	30	2017-07-11 14:06:09.063
98	6	6	60	2017-07-11 14:06:09.82
99	6	6	40	2017-07-11 14:06:10.763
100	6	27	20	2017-07-12 12:33:55.677
101	6	6	50	2017-07-12 12:34:51.64
102	6	16	50	2017-07-12 12:35:53.543
103	6	26	20	2017-07-12 12:36:08.843
104	6	12	20	2017-07-12 12:48:30.013
10100	6	12	60	2017-07-12 22:32:37.783
10101	6	12	40	2017-07-12 22:32:47.64
10102	6	12	70	2017-07-12 22:32:51.367
10103	6	12	30	2017-07-12 22:33:09.767
10104	6	12	70	2017-07-12 22:34:21.037
10105	6	12	30	2017-07-12 22:34:23.863
10106	6	12	60	2017-07-12 22:34:37.1
10107	6	12	40	2017-07-12 22:34:40.8
10108	1	23	70	2017-07-13 18:00:47.543
10109	1	23	30	2017-07-13 18:00:59.757
10110	1	23	60	2017-07-13 18:01:01.543
10111	1	23	40	2017-07-13 18:01:02.677
10112	1	23	70	2017-07-13 18:01:03.973
10113	1	23	30	2017-07-13 18:01:05.103
10114	1	23	60	2017-07-13 18:01:07.47
10115	1	23	40	2017-07-13 18:01:10.657
10116	1	23	60	2017-07-13 18:01:12.657
10117	1	26	60	2017-07-13 18:01:15.34
10118	1	27	70	2017-07-13 18:01:16.893
10119	1	27	30	2017-07-13 18:01:17.993
10120	1	26	40	2017-07-13 18:01:20.83
10121	1	23	40	2017-07-13 18:01:22.43
10122	1	23	72	2017-07-16 19:47:57.833
10123	1	23	74	2017-07-16 19:49:52.563
10124	1	7	72	2017-07-16 19:53:43.99
10125	1	7	74	2017-07-16 19:53:53.34
10126	1	23	72	2017-07-16 20:01:34.57
10127	1	23	74	2017-07-16 20:01:42.2
10128	1	23	72	2017-07-16 20:01:44.213
10129	1	23	74	2017-07-16 20:02:00.26
10130	1	12	72	2017-07-16 20:05:00.883
10131	1	12	74	2017-07-16 20:05:03.207
10132	1	7	70	2017-07-16 20:05:19.843
10133	1	7	30	2017-07-16 20:05:21.047
10134	1	23	72	2017-07-16 20:07:37.417
10135	1	23	74	2017-07-16 20:07:39.893
10136	1	23	72	2017-07-16 20:08:12.02
10137	1	23	74	2017-07-16 20:10:37.623
10138	1	23	72	2017-07-16 20:10:39.65
10139	1	23	74	2017-07-16 20:10:42.207
10140	1	12	70	2017-07-16 20:10:51.903
10141	1	12	30	2017-07-16 20:10:54.87
10142	1	12	72	2017-07-16 20:10:56.56
10143	1	12	74	2017-07-16 20:11:03.973
10144	1	12	72	2017-07-16 20:11:27.547
10145	1	12	74	2017-07-16 20:11:42.383
10146	6	12	72	2017-07-16 20:20:49.42
10147	1	27	72	2017-07-16 20:41:47.043
10148	1	27	74	2017-07-16 20:41:48.09
10149	1	26	72	2017-07-16 20:41:50.727
10150	1	26	74	2017-07-16 20:41:52.1
10151	6	7	72	2017-07-16 20:54:39.41
10152	6	7	74	2017-07-16 20:54:42.823
10153	6	7	72	2017-07-16 20:54:45.983
10154	6	7	74	2017-07-16 20:56:05.587
10155	6	7	74	2017-07-16 20:56:06.263
10156	6	27	50	2017-07-16 21:14:52.923
10157	1	12	74	2017-07-17 09:36:31.05
10158	1	12	72	2017-07-17 10:24:28.92
10159	1	12	74	2017-07-17 10:24:36.437
10160	6	26	72	2017-07-17 10:31:06.293
10161	6	26	50	2017-07-17 10:32:01.55
10162	6	26	20	2017-07-17 10:32:20.843
10163	1	12	72	2017-07-17 13:21:46.37
10164	1	12	74	2017-07-17 13:21:48.423
10165	1	12	72	2017-07-17 13:21:50.05
10166	1	12	74	2017-07-17 13:21:51.15
10167	1	12	70	2017-07-17 13:21:52.36
10168	1	12	30	2017-07-17 13:21:54.83
10169	1	12	70	2017-07-17 13:21:55.093
10170	1	12	30	2017-07-17 13:21:56.467
10171	1	12	60	2017-07-17 13:21:57.56
10172	1	12	40	2017-07-17 13:21:59.007
10173	1	12	72	2017-07-17 14:34:44.037
10174	6	26	60	2017-07-18 00:55:44.327
10175	6	26	40	2017-07-18 00:55:46.71
10176	6	26	70	2017-07-18 00:55:49.743
10177	6	26	30	2017-07-18 00:55:52.303
10178	6	26	72	2017-07-18 00:55:55.43
10179	6	26	74	2017-07-18 00:55:59.09
10180	1	26	60	2017-07-22 17:41:17.963
10181	1	26	40	2017-07-22 17:41:19.637
10182	1	26	70	2017-07-22 17:41:21.13
10183	1	26	30	2017-07-22 17:41:22.32
10184	1	12	74	2017-07-22 17:41:23.447
10185	1	12	72	2017-07-22 17:41:24.697
10186	1	12	74	2017-07-22 17:41:25.82
10187	1	12	70	2017-07-22 17:41:26.773
10188	1	12	30	2017-07-22 17:41:28.063
10189	1	12	60	2017-07-22 17:41:29.11
10190	1	12	40	2017-07-22 17:41:30.227
10191	1	12	72	2017-07-22 17:52:39.283
10192	1	12	74	2017-07-22 17:52:40.273
10193	1	12	70	2017-07-22 17:52:41.147
10194	1	12	30	2017-07-22 17:52:42.07
10195	1	12	60	2017-07-22 17:52:42.85
10196	1	12	40	2017-07-22 17:52:44.563
10197	1	12	70	2017-07-22 19:30:39.143
10198	1	12	30	2017-07-22 19:30:51.53
10199	6	13	80	2018-09-14 09:40:08.433
10200	6	13	20	2018-09-14 10:06:05.897
10201	6	13	70	2018-09-14 10:39:03.937
10202	6	13	30	2018-09-14 10:39:13.063
10203	6	13	72	2018-09-14 10:39:19.103
10204	6	13	74	2018-09-14 10:39:21.047
10205	6	16	20	2018-09-17 09:56:55.937
10206	6	12	60	2018-09-17 11:00:30.81
10207	6	26	70	2018-09-18 12:30:00.17
10208	6	26	30	2018-09-18 12:30:09.6
\.


                                                                                         2430.dat                                                                                            0000600 0004000 0002000 00000000306 13353144341 0014242 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        10	لايوجد
20	شروق
30	بحر
40	على الخط
50	غروب
60	بعيد عن الجهاز
70	بر
72	دوريه مترجله
74	* TRIAL * TRIA
80	غياب
90	اجازه
100	مرضيه
\.


                                                                                                                                                                                                                                                                                                                          2431.dat                                                                                            0000600 0004000 0002000 00000000177 13353144341 0014251 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        10	* TRIAL * TRI
20	ضابط الشفت
30	* TRIAL *
40	* TRIAL * 
50	* TRIAL * T
60	دورية
70	مرافق
80	مؤقت
\.


                                                                                                                                                                                                                                                                                                                                                                                                 2434.dat                                                                                            0000600 0004000 0002000 00000001323 13353144341 0014246 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	1	1105	80	* TRIAL * TRIAL 	77111129	
3	1	12574	120	تركي المهندي	33336370	
4	1	567	90	hhhhhhhh		
5	1	299	80	dddd	1111	
6	1	333	80	sddsfsdfd		
7	1	444	90	dfdfsdf		
8	1	555	140	sdfsf		
9	1	666	140	sdfsdfdf		
10	1	777	120	sdfdfdff		
11	1	9293	70	* TRIAL 		
12	1	2342	20	dfdfdf		
13	1	11111	140	sfsdgsg		
14	1	1111	10	ihihihi		
15	1	423	50	sdfsfsv	ffffff	
16	1	394	50	dsfsggg	ggggg	
17	1	334	50	fgfsgfg	dfgdfgfg	
18	1	543	50	* TRIAL * T	ggggg	
19	1	765	50	dfsdfdf	ffffrrrr	
20	1	885	50	dkfkdkfk	kkkkk	
21	1	999	50	mmmmmmm	mmmmkk	
22	1	142	50	skekek	* TRIAL 	
23	1	213	50	kkkkk	kkkkkkk	
24	1	223	50	kkdkdkdk	dkkdkdkdkd	
25	1	723	40	dsfsdfsd	sdfsdfsdfsf	
26	1	1423	10	الملا		
27	1	23423	10	عبدالله		
\.


                                                                                                                                                                                                                                                                                                             2432.dat                                                                                            0000600 0004000 0002000 00000000367 13353144341 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        10	لواء
20	عميد
30	عقيد
40	مقدم
50	رائد
60	نقيب
70	* TRIAL *
80	ملازم ثاني
90	مرشح ضابط
100	وكيل أول
110	* TRIAL *
120	رقيب
130	نائب
140	عريف
150	* TRIAL *
160	شرطي
170	مدني
\.


                                                                                                                                                                                                                                                                         2452.dat                                                                                            0000600 0004000 0002000 00000000026 13353144341 0014245 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	30
2	31
3	3131
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          2426.dat                                                                                            0000600 0004000 0002000 00000000415 13353144341 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	عام	\N	0
2	1	القطاع الأول	1 	0
3	1	القطاع الثاني	2 	0
4	1	* TRIAL * TRI	3 	0
5	1	* TRIAL * TRI	4 	0
6	1	القطاع الخامس	5 	1
7	2	القطاع الشمالي	ش 	0
8	3	* TRIAL * TRIA	ج 	0
9	4	القطاع الغربي	غ 	0
\.


                                                                                                                                                                                                                                                   2433.dat                                                                                            0000600 0004000 0002000 00000000062 13353144341 0014244 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	صباح	6	8
2	عصر	14	8
3	مساء	22	8
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                              2453.dat                                                                                            0000600 0004000 0002000 00000350041 13353144341 0014253 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Diagram_0	5	1	1	\\xd0cf11e0a1b11ae1000000000000000000000000000000003e000300feff0900060000000000000000000000010000000100000000000000001000004400000001000000feffffff0000000000000000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffff46000000030000000400000005000000060000000700000008000000090000000a0000000b0000000c0000000d0000000e0000000f0000001000000011000000feffffff130000001400000015000000160000001700000018000000190000001a0000001b0000001c0000001d0000001e0000001f000000200000002100000022000000230000002400000025000000260000002700000028000000290000002a0000002b0000002c0000002d0000002e0000002f000000300000003100000032000000330000003400000035000000360000003700000038000000390000003a0000003b0000003c0000003d0000003e0000003f00000040000000410000004200000043000000fefffffffeffffff6f000000feffffff48000000490000004a0000004b0000004c0000004d0000004e0000004f000000500000005100000052000000530000005400000055000000560000005700000058000000590000005a0000005b0000005c0000005d0000005e0000005f000000600000006100000062000000630000006400000065000000660000006700000068000000690000006a0000006b0000006c0000006d0000006e000000feffffff700000007100000072000000feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff52006f006f007400200045006e00740072007900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016000500ffffffffffffffff020000000000000000000000000000000000000000000000000000000000000090a56a4efffbd20145000000c0080000000000006600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000201ffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000020000001e1f0000000000006f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040002010100000004000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000120000000c63000000000000010043006f006d0070004f0062006a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000201ffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000005f00000000000000000438000a1fd00d05000080b60000000d0fffff5000000000000000b6000000007d000037660000555a000044fa0000a5300100cff5ffff4bcd0000de805b10f195d011b0a000aa00bdcb5c000008003000000000020000030000003c006b0000000900000000000000d9e6b0e91c81d011ad5100a0c90f5739f43b7f847f61c74385352986e1d552f8a0327db2d86295428d98273c25a2da2d00002800430000000000000053444dd2011fd1118e63006097d2df4834c9d2777977d811907000065b840d9c00002800430000000000000051444dd2011fd1118e63006097d2df4834c9d2777977d811907000065b840d9c63000000241e000000e3011b00003000a509000007000080010000009c02000000800000050000805363684772696400d8270000647d0000416877616c69640000003000a50900000700008002000000a0020000008000000700008053636847726964007e36000088c20000506572736f6e730000003000a509000007000080030000009c0200000080000005000080536368477269640032190000a0d7000052616e6b7369640000006800a5090000070000800400000062000000018000003d000080436f6e74726f6c00633100004a84000052656c6174696f6e736869702027464b5f506572736f6e735f416877616c27206265747765656e2027416877616c2720616e642027506572736f6e732700000000002800b50100000700008005000000310000005300000002800000436f6e74726f6c00b1360000889d000000006800a5090000070000800600000062000000018000003d000080436f6e74726f6c008e2e000099cb000052656c6174696f6e736869702027464b5f506572736f6e735f52616e6b7327206265747765656e202752616e6b732720616e642027506572736f6e732700000000002800b50100000700008007000000310000005300000002800000436f6e74726f6c004b350000e1d6000000003400a50900000700008008000000a402000000800000090000805363684772696400a0f6ffff82aa000048616e6448656c647300000000003400a50900000700008009000000a6020000008000000a0000805363684772696400d449000058e30000506174726f6c43617273000000006c00a5090000070000800a000000620000000180000041000080436f6e74726f6c00470000004a84000052656c6174696f6e736869702027464b5f48616e6448656c64735f416877616c27206265747765656e2027416877616c2720616e64202748616e6448656c64732700650000002800b5010000070000800b000000310000005700000002800000436f6e74726f6c003a190000618b000000006c00a5090000070000800c000000620000000180000043000080436f6e74726f6c00593b00004a84000052656c6174696f6e736869702027464b5f506174726f6c436172735f416877616c27206265747765656e2027416877616c2720616e642027506174726f6c43617273270000002800b5010000070000800d000000310000005900000002800000436f6e74726f6c0064370000dbb5000000003000a5090000070000800e0000009c02000000800000050000805363684772696400c2010000ea050100557365727369640000003400a5090000070000800f000000a6020000008000000a000080536368477269640006180000565e00005573657273526f6c6573000000003800a5090000070000801b000000ac020000008000000d000080536368477269640062f8ffff2a5d00005573657273526f6c65734d617006000000007400a5090000070000801c000000620000000180000049000080436f6e74726f6c00c10000008766000052656c6174696f6e736869702027464b5f5573657273526f6c65734d61705f557365727327206265747765656e202755736572732720616e6420275573657273526f6c65734d61702700270000002800b5010000070000801d000000310000005f00000002800000436f6e74726f6c0007030000ccb1000000007400a5090000070000801e000000620000000180000049000080436f6e74726f6c00090200008766000052656c6174696f6e736869702027464b5f5573657273526f6c65734d61705f416877616c27206265747765656e2027416877616c2720616e6420275573657273526f6c65734d61702700730000002800b5010000070000801f000000310000005f00000002800000436f6e74726f6c00ac1900008e73000000007c00a50900000700008020000000520000000180000053000080436f6e74726f6c00be0d00006f61000052656c6174696f6e736869702027464b5f5573657273526f6c65734d61705f5573657273526f6c657327206265747765656e20275573657273526f6c65732720616e6420275573657273526f6c65734d6170270000002800b50100000700008021000000310000006900000002800000436f6e74726f6c00e20c0000ff60000000003000a50900000700008025000000a0020000008000000700008053636847726964003e490000a27b0000536563746f72730000003800a50900000700008030000000ac020000008000000d0000805363684772696400aa370000584d00004f7065726174696f6e4c6f677306000000003400a50900000700008031000000a6020000008000000a0000805363684772696400e45700009e5200004f7065726174696f6e736f6700007400a50900000700008033000000620000000180000049000080436f6e74726f6c001e170000d355000052656c6174696f6e736869702027464b5f4f7065726174696f6e4c6f67735f557365727327206265747765656e202755736572732720616e6420274f7065726174696f6e4c6f677327007d0000002800b50100000700008034000000310000005f00000002800000436f6e74726f6c0089300000afba000000007c00a50900000700008035000000520000000180000053000080436f6e74726f6c00064d0000b755000052656c6174696f6e736869702027464b5f4f7065726174696f6e4c6f67735f4f7065726174696f6e7327206265747765656e20274f7065726174696f6e732720616e6420274f7065726174696f6e4c6f6773270000002800b50100000700008036000000310000006900000002800000436f6e74726f6c00c34a00004755000000003800a50900000700008038000000b202000000800000100000805363684772696400aa3700000e6a00004f7065726174696f6e7353746174757300008800a5090000070000803900000052000000018000005f000080436f6e74726f6c0035410000265e000052656c6174696f6e736869702027464b5f4f7065726174696f6e4c6f67735f4f7065726174696f6e7353746174757327206265747765656e20274f7065726174696f6e735374617475732720616e6420274f7065726174696f6e4c6f6773270000002800b5010000070000803a000000310000007500000002800000436f6e74726f6c007b430000cb64000000003400a5090000070000803b000000aa020000008000000c0000805363684772696400a27b000018ab0000416877616c4d617070696e6700003c00a50900000700008048000000b6020000008000001200008053636847726964009696000032af0000506174726f6c506572736f6e537461746573000000003400a50900000700008049000000a8020000008000000b00008053636847726964000096000038c70000506174726f6c526f6c65736700003800a5090000070000804a000000b0020000008000000f0000805363684772696400ead9fffff22b0000526573657276656443616c6c6572737300003000a5090000070000804b0000009e02000000800000060000805363684772696400926d00000a8c0000536869667473640000003800a50900000700008057000000b202000000800000100000805363684772696400ead9ffffbadb0000436865636b496e4f757453746174657300003c00a50900000700008058000000b802000000800000130000805363684772696400ead9ffff5cc1000048616e6448656c6473436865636b496e4f75740000009400a5090000070000805a00000052000000018000006b000080436f6e74726f6c00b3e1ffff82cf000052656c6174696f6e736869702027464b5f48616e6448656c6473436865636b496e4f75745f436865636b496e4f757453746174657327206265747765656e2027436865636b496e4f75745374617465732720616e64202748616e6448656c6473436865636b496e4f7574270000002800b5010000070000805b000000310000008100000002800000436f6e74726f6c00f9e3ffff4fd6000000008800a5090000070000805e00000062000000018000005d000080436f6e74726f6c00ecebfffff3af000052656c6174696f6e736869702027464b5f48616e6448656c6473436865636b496e4f75745f48616e6448656c647327206265747765656e202748616e6448656c64732720616e64202748616e6448656c6473436865636b496e4f75742773270000002800b5010000070000805f000000310000007300000002800000436f6e74726f6c0003e2ffff39b2000000008400a5090000070000806c000000520000000180000059000080436f6e74726f6c00ecebffff87c1000052656c6174696f6e736869702027464b5f48616e6448656c6473436865636b496e4f75745f506572736f6e7327206265747765656e2027506572736f6e732720616e64202748616e6448656c6473436865636b496e4f75742700000000002800b5010000070000806d000000310000006f00000002800000436f6e74726f6c003808000017c1000000003800a5090000070000806e000000b20200000080000010000080536368477269640024faffff02d00000506174726f6c436865636b496e4f757400007c00a5090000070000806f000000520000000180000053000080436f6e74726f6c00930b000001cf000052656c6174696f6e736869702027464b5f506174726f6c436865636b496e4f75745f506572736f6e7327206265747765656e2027506572736f6e732720616e642027506174726f6c436865636b496e4f7574270000002800b50100000700008070000000310000006900000002800000436f6e74726f6c005719000091ce000000008400a50900000700008071000000620000000180000059000080436f6e74726f6c00930b0000dde1000052656c6174696f6e736869702027464b5f506174726f6c436865636b496e4f75745f506174726f6c4361727327206265747765656e2027506174726f6c436172732720616e642027506174726f6c436865636b496e4f7574274f757400002800b50100000700008072000000310000006f00000002800000436f6e74726f6c00ed240000e7e1000000009000a50900000700008073000000520000000180000065000080436f6e74726f6c00ceebffffb9da000052656c6174696f6e736869702027464b5f506174726f6c436865636b496e4f75745f436865636b496e4f757453746174657327206265747765656e2027436865636b496e4f75745374617465732720616e642027506174726f6c436865636b496e4f75742700000000002800b50100000700008074000000310000007b00000002800000436f6e74726f6c0077e8ffffffdc000000003c00a50900000700008076000000ba02000000800000140000805363684772696400f6540000ba900000506174726f6c506572736f6e53746174654c6f6700007c00a50900000700008077000000520000000180000053000080436f6e74726f6c00fe90000037c6000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f506174726f6c526f6c657327206265747765656e2027506174726f6c526f6c65732720616e642027416877616c4d617070696e67270000002800b50100000700008078000000310000006900000002800000436f6e74726f6c00cd8b0000c7c5000000007c00a5090000070000807c000000620000000180000051000080436f6e74726f6c00305f0000e7d7000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f506174726f6c4361727327206265747765656e2027506174726f6c436172732720616e642027416877616c4d617070696e672700000000002800b5010000070000807d000000310000006700000002800000436f6e74726f6c00496a0000f2da000000007400a5090000070000807e00000052000000018000004b000080436f6e74726f6c00da4b000087c1000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f506572736f6e7327206265747765656e2027506572736f6e732720616e642027416877616c4d617070696e67270000002800b5010000070000807f000000310000006100000002800000436f6e74726f6c00f35c0000cdc3000000007800a5090000070000808000000052000000018000004f000080436f6e74726f6c00fc0b000017aa000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f48616e6448656c647327206265747765656e202748616e6448656c64732720616e642027416877616c4d617070696e67271b00002800b50100000700008081000000310000006500000002800000436f6e74726f6c00493c00005dac000000008c00a50900000700008083000000520000000180000061000080436f6e74726f6c00fe90000031ae000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f506174726f6c506572736f6e53746174657327206265747765656e2027506174726f6c506572736f6e5374617465732720616e642027416877616c4d617070696e6727876d1f00002800b50100000700008084000000310000007700000002800000436f6e74726f6c00f4890000c1ad000000007400a50900000700008086000000520000000180000049000080436f6e74726f6c00a17a0000619a000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f53686966747327206265747765656e20275368696674732720616e642027416877616c4d617070696e6727007d0000002800b50100000700008087000000310000005f00000002800000436f6e74726f6c00056e00006ca3000000003400a5090000070000808d000000a6020000008000000a0000805363684772696400ca530000c8af00004369747947726f757073000000007c00a5090000070000808e000000520000000180000051000080436f6e74726f6c00ae650000c7ae000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f4369747947726f75707327206265747765656e20274369747947726f7570732720616e642027416877616c4d617070696e672704000000002800b5010000070000808f000000310000006700000002800000436f6e74726f6c00056900000db1000000007400a5090000070000809000000062000000018000004b000080436f6e74726f6c003d480000f989000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f536563746f727327206265747765656e2027536563746f72732720616e642027416877616c4d617070696e67270000002800b50100000700008091000000310000006100000002800000436f6e74726f6c009f410000f3a5000000007000a5090000070000809a000000520000000180000047000080436f6e74726f6c00c9520000f989000052656c6174696f6e736869702027464b5f4369747947726f7570735f536563746f727327206265747765656e2027536563746f72732720616e6420274369747947726f757073270000002800b5010000070000809b000000310000005d00000002800000436f6e74726f6c00f6460000909d000000006c00a5090000070000809c000000620000000180000043000080436f6e74726f6c00ef3b00004a84000052656c6174696f6e736869702027464b5f4369747947726f7570735f416877616c27206265747765656e2027416877616c2720616e6420274369747947726f757073270000002800b5010000070000809d000000310000005900000002800000436f6e74726f6c00503f0000139c000000006800a5090000070000809e00000052000000018000003d000080436f6e74726f6c00343d0000637c000052656c6174696f6e736869702027464b5f536563746f72735f416877616c27206265747765656e2027416877616c2720616e642027536563746f72732700000000002800b5010000070000809f000000310000005300000002800000436f6e74726f6c00cc3e0000a97e000000008400a509000007000080a000000062000000018000005b000080436f6e74726f6c00954a000052a2000052656c6174696f6e736869702027464b5f506174726f6c506572736f6e53746174654c6f675f506572736f6e7327206265747765656e2027506572736f6e732720616e642027506174726f6c506572736f6e53746174654c6f67277400002800b501000007000080a1000000310000007100000002800000436f6e74726f6c00db4c00007ab4000000009c00a509000007000080a2000000620000000180000071000080436f6e74726f6c00ce68000095a2000052656c6174696f6e736869702027464b5f506174726f6c506572736f6e53746174654c6f675f506174726f6c506572736f6e53746174657327206265747765656e2027506174726f6c506572736f6e5374617465732720616e642027506174726f6c506572736f6e53746174654c6f672700000000002800b501000007000080a3000000310000008700000002800000436f6e74726f6c008f77000009a2000000008000a509000007000080a4000000620000000180000057000080436f6e74726f6c001e170000d58f000052656c6174696f6e736869702027464b5f506174726f6c506572736f6e53746174654c6f675f557365727327206265747765656e202755736572732720616e642027506174726f6c506572736f6e53746174654c6f67270000002800b501000007000080a5000000310000006d00000002800000436f6e74726f6c009f320000a4ce000000003400a509000007000080a6000000a4020000008000000900008053636847726964003453000028040100496e636964656e747300000000007800a509000007000080a700000062000000018000004f000080436f6e74726f6c00316300002fd7000052656c6174696f6e736869702027464b5f416877616c4d617070696e675f496e636964656e747327206265747765656e2027496e636964656e74732720616e642027416877616c4d617070696e67271b00002800b501000007000080a8000000310000006500000002800000436f6e74726f6c002e710000b8ef000000003c00a509000007000080a9000000b402000000800000110000805363684772696400181500000a220100496e636964656e7473436f6d6d656e747375740000003800a509000007000080aa000000b0020000008000000f00008053636847726964009c18000046e60000496e636964656e74536f75726365730000003800a509000007000080ab000000ae020000008000000e0000805363684772696400bc34000026150100496e636964656e74537461746573000000003800a509000007000080ac000000ae020000008000000e0000805363684772696400b42d00009ee80000496e636964656e74735479706573657300007c00a509000007000080ad000000520000000180000053000080436f6e74726f6c00064600002514010052656c6174696f6e736869702027464b5f496e636964656e74735f496e636964656e7453746174657327206265747765656e2027496e636964656e745374617465732720616e642027496e636964656e7473270000002800b501000007000080ae000000310000006900000002800000436f6e74726f6c006e4500006b16010000007c00a509000007000080af000000620000000180000053000080436f6e74726f6c00fe3e0000ebf3000052656c6174696f6e736869702027464b5f496e636964656e74735f496e636964656e7473547970657327206265747765656e2027496e636964656e747354797065732720616e642027496e636964656e7473270000002800b501000007000080b0000000310000006900000002800000436f6e74726f6c001e390000cffd000000008000a509000007000080b1000000620000000180000055000080436f6e74726f6c00e62900009102010052656c6174696f6e736869702027464b5f496e636964656e74735f496e636964656e74536f757263657327206265747765656e2027496e636964656e74536f75726365732720616e642027496e636964656e74732700000000002800b501000007000080b2000000310000006b00000002800000436f6e74726f6c00463300009906010000006c00a509000007000080b3000000520000000180000041000080436f6e74726f6c001e170000e904010052656c6174696f6e736869702027464b5f496e636964656e74735f557365727327206265747765656e202755736572732720616e642027496e636964656e747327726f7500002800b501000007000080b4000000310000005700000002800000436f6e74726f6c00653000002f07010000008400a509000007000080b5000000520000000180000059000080436f6e74726f6c00ad2600000921010052656c6174696f6e736869702027464b5f496e636964656e7473436f6d6d656e74735f496e636964656e747327206265747765656e2027496e636964656e74732720616e642027496e636964656e7473436f6d6d656e74732700000000002800b501000007000080b6000000310000006f00000002800000436f6e74726f6c006734000099200100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002143341208000000881600009d09000078563412070000001401000041006800770061006c0000000000803f9a99993ed7d6563fdcdb5b3feae9693f0000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000e60a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005400000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000600000041006800770061006c0000002143341208000000881600008913000078563412070000001401000050006500720073006f006e00730000009a99993ed7d6563fdcdb5b3feae9693f0000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c00000034000000000000000000000022290000ab170000000000002d010000080000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600008913000000000000060000000600000002000000020000001c010000d70a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005800000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000800000050006500720073006f006e00730000002143341208000000881600009d090000785634120700000014010000520061006e006b00730000000000803f9a99993ed7d6563fdcdb5b3feae9693f0000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000d70a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005400000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f00000006000000520061006e006b007300000004000b00fa32000001870000fa3200001c8e0000a04100001c8e0000a041000088c200000000000002000000f0f0f00000000000000000000000000000000000010000000500000000000000b1360000889d0000400a00005801000032000000010000020000400a000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61100046004b005f0050006500720073006f006e0073005f0041006800770061006c0004000b00ba2f000050dc00009c34000050dc00009c34000014cd00007e36000014cd00000000000002000000f0f0f000000000000000000000000000000000000100000007000000000000004b350000e1d60000400a00005801000032000000010000020000400a000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61100046004b005f0050006500720073006f006e0073005f00520061006e006b007300214334120800000088160000930e0000785634120700000014010000480061006e006400480065006c00640073000000d7d6563fdcdb5b3feae9693f0000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec0400003606000047040000000000000100000088160000930e000000000000040000000400000002000000020000001c010000ab0900000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005c00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000a000000480061006e006400480065006c006400730000002143341208000000881600007f18000078563412070000001401000050006100740072006f006c0043006100720073000000ee13000000000000000000000000000000000000000000000000006071400000000000407040000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f03f000000000000000078ae1a6700000000000000002cb01a67407a1b67485eee13485eee130200000002000000000000000000000000000000000000000200000000000000000000000000000000008243000082c30000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c00000034000000000000000000000022290000371c0000000000002d0100000a0000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600007f18000000000000080000000800000002000000020000001c010000e60a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005e00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000b00000050006100740072006f006c004300610072007300000004000b00762f000001870000762f0000688d0000c2010000688d0000c201000082aa00000000000002000000f0f0f00000000000000000000000000000000000010000000b000000000000003a190000618b0000b70b00005801000014000000010000020000b70b000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61120046004b005f00480061006e006400480065006c00640073005f0041006800770061006c0004000b00f03c000001870000f03c00002cb500006a4a00002cb500006a4a000058e300000000000002000000f0f0f00000000000000000000000000000000000010000000d0000000000000064370000dbb500009a0b000058010000320000000100000200009a0b000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61130046004b005f0050006100740072006f006c0043006100720073005f0041006800770061006c00214334120800000088160000930e00007856341207000000140100005500730065007200730000000000000008fd6a09cccdd70600000000000000000000244000000000000014400000000000c070400000000000001440000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000f03f000000000000000000000000000000000000000000000000000000000000000078ae1a6700000000000000002cb01a67407a1b67e8cdd706e8cdd706020000000200000000000000000000000000000000000000020000000000204100002041000020410000a040000070410000204100000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec0400003606000047040000000000000100000088160000930e000000000000040000000400000002000000020000001c010000d70a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005400000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f000000060000005500730065007200730000002143341208000000881600009d0900007856341207000000140100005500730065007200730052006f006c00650073000000d706000000000000000000001440000000000000244000000000000014400000000000406f40000000000000f03f0000000000000000000000000100000001000000000000000000000000000000000000000000f03f0000000000000000000000000000000000000000000000000000000000000000000000000000000078ae1a6700000000000000002cb01a67407a1b6750d4d70650d4d7060200000002000000000000000000000000000000000000000200000000002041000020410000a04000002041000020410000a04000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000d70a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005e00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000b0000005500730065007200730052006f006c00650073000000214334120800000088160000180c00007856341207000000140100005500730065007200730052006f006c00650073004d00610070000000000000000000244000000000004070400000000000c070400000000000001440000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f03f000000000000000078ae1a6700000000000000002cb01a67407a1b67284e2920284e292002000000020000000000000000000000000000000000000002000000000020410000824300002041008084430000a0400000824300000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec0400003606000047040000000000000100000088160000180c000000000000030000000300000002000000020000001c010000d70a0000000000000100000039130000060a000000000000030000000300000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006400000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000e0000005500730065007200730052006f006c00650073004d0061007000000004000b0058020000ea05010058020000668d0000100e0000668d0000100e0000426900000000000002000000f0f0f00000000000000000000000000000000000010000001d0000000000000007030000ccb10000f80d00005801000032000000010000020000f80d000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61160046004b005f005500730065007200730052006f006c00650073004d00610070005f005500730065007200730004000b00fa320000647d0000fa32000095750000840300009575000084030000426900000000000002000000f0f0f00000000000000000000000000000000000010000001f00000000000000ac1900008e730000320e00005801000032000000010000020000320e000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61160046004b005f005500730065007200730052006f006c00650073004d00610070005f0041006800770061006c0002000b000618000006630000ea0e0000066300000000000002000000f0f0f00000000000000000000000000000000000010000002100000000000000e20c0000ff600000e6100000580100004a000000010000020000e610000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611b0046004b005f005500730065007200730052006f006c00650073004d00610070005f005500730065007200730052006f006c00650073002143341208000000881600000e11000078563412070000001401000053006500630074006f0072007300000088ee6a09bc55292000000000000000000000244000000000004070400000000000c070400000000000001440000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f03f000000000000000078ae1a6700000000000000002cb01a67407a1b67d8552920d855292002000000020000000000000000000000000000000000000002000000000020410000824300002041008084430000a0400000824300000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600000e11000000000000050000000500000002000000020000001c010000d70a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005800000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000800000053006500630074006f00720073000000214334120800000088160000891300007856341207000000140100004f007000650072006100740069006f006e004c006f00670073000000eae9693f0000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c00000034000000000000000000000022290000ab170000000000002d010000080000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600008913000000000000060000000600000002000000020000001c010000d70a00000000000001000000391300003403000000000000000000000000000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006400000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000e0000004f007000650072006100740069006f006e004c006f006700730000002143341208000000881600009d0900007856341207000000140100004f007000650072006100740069006f006e00730000002920000000000000000000000000000000000000000000000000006071400000000000407040000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f03f000000000000000078ae1a6700000000000000002cb01a67407a1b67d05e2920d05e29200200000002000000000000000000000000000000000000000200000000000000000000000000000000008243000082c30000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000c80a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005e00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000b0000004f007000650072006100740069006f006e007300000004000b004a180000f20c0100da2f0000f20c0100da2f00004e570000aa3700004e5700000000000002000000f0f0f0000000000000000000000000000000000001000000340000000000000089300000afba0000a10d00005801000032000000010000020000a10d000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61160046004b005f004f007000650072006100740069006f006e004c006f00670073005f005500730065007200730002000b00e45700004e570000324e00004e5700000000000002000000f0f0f00000000000000000000000000000000000010000003600000000000000c34a0000475500008f10000058010000320000000100000200008f10000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611b0046004b005f004f007000650072006100740069006f006e004c006f00670073005f004f007000650072006100740069006f006e0073002143341208000000881600009d0900007856341207000000140100004f007000650072006100740069006f006e0073005300740061007400750073000000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f000000000000000000000000000000000000f03f000000000000000078ae1a6700000000000000002cb01a67407a1b67905fee13905fee1302000000020000000000000000000000000000000000000002000000000020410080804300002041000083430000a0400080804300000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000d70a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006a00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f000000110000004f007000650072006100740069006f006e007300530074006100740075007300000002000b00cc4200000e6a0000cc420000e16000000000000002000000f0f0f00000000000000000000000000000000000010000003a000000000000007b430000cb6400000d14000058010000320000000100000200000d14000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61210046004b005f004f007000650072006100740069006f006e004c006f00670073005f004f007000650072006100740069006f006e007300530074006100740075007300214334120800000088160000d22e000078563412070000001401000041006800770061006c004d0061007000700069006e0067000000703f0000803f0000803f9a99993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f0000000000000000000000000000000072696e67730001000000171100000057696e33324150497c5365727669636520537472756374757265737c534552564943455f5354415455537c64775761697448696e7400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000009230000000000002d0100000d0000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec0400003606000047040000000000000100000088160000d22e000000000000110000000c00000002000000020000001c010000ab090000000000000100000039130000c007000000000000020000000200000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006200000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000d00000041006800770061006c004d0061007000700069006e00670000002143341208000000881600009d09000078563412070000001401000050006100740072006f006c0050006500720073006f006e005300740061007400650073000000993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000c80a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006e00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001300000050006100740072006f006c0050006500720073006f006e0053007400610074006500730000002143341208000000b4150000eb17000078563412070000001401000050006100740072006f006c0052006f006c0065007300000000000000000000000000244000000000000014400000000000c070400000000000001440000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000f03f000000000000000000000000000000000000000000000000000000000000000044b6956b0000000000000000e4b8956b6425966b005cb924005cb924020000000200000000000000000000000000000000000000020000000000204100002041000020410000a040000070410000204100000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000b4150000eb17000000000000020000000200000002000000020000001c0100006e0a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006000000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000c00000050006100740072006f006c0052006f006c006500730000002143341208000000881600009d09000078563412070000001401000052006500730065007200760065006400430061006c006c00650072007300000000001440000000000000244000000000000014400000000000406f40000000000000f03f0000000000000000000000000100000001000000000000000000000000000000000000000000f03f0000000000000000000000000000000000000000000000000000000000000000000000000000000044b6956b0000000000000000e4b8956b6425966bf864b924f864b9240200000002000000000000000000000000000000000000000200000000002041000020410000a04000002041000020410000a04000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600009d09000000000000020000000200000002000000020000001c010000e60a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000006800000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001000000052006500730065007200760065006400430061006c006c0065007200730000002143341208000000881600000e1100007856341207000000140100005300680069006600740073000000e43ecdcccc3d000000000000000000000000e5e4e43e9a99993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f000000000000000000000000000000000000f03f000000000000000044b6956b0000000000000000e4b8956b6425966b2858b9242858b924020000000200000000000000000000000000000000000000020000000000000000000040000000000000a841000098c10000004000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000002229000065150000000000002d010000070000000c000000070000001c0100000609000062070000a30200004803000049020000ec040000ec040000ee020000ec04000036060000470400000000000001000000881600000e11000000000000050000000500000002000000020000001c010000e60a00000000000001000000391300007a05000000000000010000000100000002000000020000001c010000060900000100000000000000391300003403000000000000000000000000000002000000020000001c010000060900000000000000000000d13100000923000000000000000000000d00000004000000040000001c01000006090000aa0a00009006000078563412040000005600000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f000000070000005300680069006600740073000000214334120800000010130000a609000078563412070000001401000043006800650063006b0049006e004f00750074005300740061007400650073000000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000842500007f150000000000002d010000070000000c000000070000001c010000250800009f060000a3020000480300004902000074040000ec040000ee020000ec0400003606000047040000000000000100000010130000a609000000000000020000000200000002000000020000001c010000f70800000000000001000000ac1100007a05000000000000010000000100000002000000020000001c010000250800000100000000000000ac1100003403000000000000000000000000000002000000020000001c0100002508000000000000000000005f2d00003e23000000000000000000000d00000004000000040000001c010000250800009c090000eb05000078563412040000006a00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001100000043006800650063006b0049006e004f0075007400530074006100740065007300000021433412080000002e130000e1100000785634120700000014010000480061006e006400480065006c006400730043006800650063006b0049006e004f00750074000000000014400000000000c070400000000000001440000000000000f03f00000000000000000000000001000000010000000000000000000000000000000000000000000000000000000000f03f000000000000000000000000000000000000000000000000000000000000000044b6796a0000000000000000e4b8796a64257a6a48c75a1648c75a16020000000200000000000000000000000000000000000000020000000000204100002041000020410000a040000070410000204100000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000842500007f150000000000002d010000070000000c000000070000001c010000250800009f060000a3020000480300004902000074040000ec040000ee020000ec040000360600004704000000000000010000002e130000e110000000000000050000000500000002000000020000001c010000150900000000000001000000ac1100007a05000000000000010000000100000002000000020000001c010000250800000100000000000000ac1100003403000000000000000000000000000002000000020000001c0100002508000000000000000000005f2d00003e23000000000000000000000d00000004000000040000001c010000250800009c090000eb05000078563412040000007000000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f00000014000000480061006e006400480065006c006400730043006800650063006b0049006e004f0075007400000002000b004ae3ffffbadb00004ae3ffff3dd200000000000002000000f0f0f00000000000000000000000000000000000010000005b00000000000000f9e3ffff4fd60000c81800005801000032000000010000020000c818000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61270046004b005f00480061006e006400480065006c006400730043006800650063006b0049006e004f00750074005f0043006800650063006b0049006e004f007500740053007400610074006500730004000b00a0f6ffff8ab1000034f4ffff8ab1000034f4fffffac8000018edfffffac800000000000002000000f0f0f00000000000000000000000000000000000010000005f0000000000000003e2ffff39b200009d14000058010000000000000100000200009d14000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61200046004b005f00480061006e006400480065006c006400730043006800650063006b0049006e004f00750074005f00480061006e006400480065006c006400730002000b007e3600001ec3000018edffff1ec300000000000002000000f0f0f00000000000000000000000000000000000010000006d000000000000003808000017c100002613000058010000320000000100000200002613000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611e0046004b005f00480061006e006400480065006c006400730043006800650063006b0049006e004f00750074005f0050006500720073006f006e00730021433412080000009b1200005314000078563412070000001401000050006100740072006f006c0043006800650063006b0049006e004f007500740000001440000000000000244000000000000014400000000000406f40000000000000f03f0000000000000000000000000100000001000000000000000000000000000000000000000000f03f0000000000000000000000000000000000000000000000000000000000000000000000000000000044b6796a0000000000000000e4b8796a64257a6a10613216106132160200000002000000000000000000000000000000000000000200000000002041000020410000a04000002041000020410000a04000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000005b1a000004160000000000002d010000070000000c000000070000001c0100006405000074040000a30200004803000049020000ee020000ec040000ee020000ec040000360600004704000000000000010000009b1200005314000000000000050000000500000002000000020000001c010000ac0800000000000001000000060d00009505000000000000010000000100000002000000020000001c010000640500000100000000000000060d00004f03000000000000000000000000000002000000020000001c010000640500000000000000000000861f00001224000000000000000000000d00000004000000040000001c0100006405000063060000ed03000078563412040000006a00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001100000050006100740072006f006c0043006800650063006b0049006e004f0075007400000002000b007e36000098d00000bf0c000098d000000000000002000000f0f0f000000000000000000000000000000000000100000070000000000000005719000091ce00008f10000058010000320000000100000200008f10000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611b0046004b005f0050006100740072006f006c0043006800650063006b0049006e004f00750074005f0050006500720073006f006e00730004000b00d4490000eee300006b190000eee300006b19000058e30000bf0c000058e300000000000002000000f0f0f00000000000000000000000000000000000010000007200000000000000ed240000e7e10000e91100005801000032000000010000020000e911000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611e0046004b005f0050006100740072006f006c0043006800650063006b0049006e004f00750074005f0050006100740072006f006c00430061007200730002000b00faecffff50dc000024faffff50dc00000000000002000000f0f0f0000000000000000000000000000000000001000000740000000000000077e8ffffffdc00003116000058010000320000000100000200003116000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61240046004b005f0050006100740072006f006c0043006800650063006b0049006e004f00750074005f0043006800650063006b0049006e004f00750074005300740061007400650073002143341208000000041500005314000078563412070000001401000050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f006700000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c0000003400000000000000000000005b1a000004160000000000002d010000070000000c000000070000001c0100006405000074040000a30200004803000049020000ee020000ec040000ee020000ec04000036060000470400000000000001000000041500005314000000000000050000000500000002000000020000001c010000f60900000000000001000000060d00009505000000000000010000000100000002000000020000001c010000640500000100000000000000060d00004f03000000000000000000000000000002000000020000001c010000640500000000000000000000861f00001224000000000000000000000d00000004000000040000001c0100006405000063060000ed03000078563412040000007200000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001500000050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f006700000002000b0000960000cec700002a920000cec700000000000002000000f0f0f00000000000000000000000000000000000010000007800000000000000cd8b0000c7c500008f10000058010000320000000100000200008f10000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611b0046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006100740072006f006c0052006f006c006500730004000b005c600000eee300009a690000eee300009a69000062d90000a27b000062d900000000000002000000f0f0f00000000000000000000000000000000000010000007d00000000000000496a0000f2da00001c10000058010000320000000100000200001c10000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611a0046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006100740072006f006c00430061007200730002000b00064d00001ec30000a27b00001ec300000000000002000000f0f0f00000000000000000000000000000000000010000007f00000000000000f35c0000cdc30000c10e00005801000032000000010000020000c10e000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61170046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006500720073006f006e00730002000b00280d0000aeab0000a27b0000aeab00000000000002000000f0f0f00000000000000000000000000000000000010000008100000000000000493c00005dac00003810000058010000320000000100000200003810000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61190046004b005f0041006800770061006c004d0061007000700069006e0067005f00480061006e006400480065006c006400730002000b0096960000c8af00002a920000c8af00000000000002000000f0f0f00000000000000000000000000000000000010000008400000000000000f4890000c1ad0000d71400005801000032000000010000020000d714000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61220046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006100740072006f006c0050006500720073006f006e0053007400610074006500730002000b00387c0000189d0000387c000018ab00000000000002000000f0f0f00000000000000000000000000000000000010000008700000000000000056e00006ca30000840d00005801000032000000010000020000840d000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61160046004b005f0041006800770061006c004d0061007000700069006e0067005f00530068006900660074007300214334120800000010130000950e00007856341207000000140100004300690074007900470072006f00750070007300000000000000000000000000e5e4e43e9a99993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f0000000000000000000000000000000000000000000000000000000078ae1a6700000000000000002cb01a67407a1b6750d4d70650d4d7060200000002000000000000000000000000000000000000000200000000002041000020410000a04000002041000020410000a04000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000842500007f150000000000002d010000070000000c000000070000001c010000250800009f060000a3020000480300004902000074040000ec040000ee020000ec0400003606000047040000000000000100000010130000950e000000000000040000000400000002000000020000001c0100009e0700000000000001000000ac1100007a05000000000000010000000100000002000000020000001c010000250800000100000000000000ac1100003403000000000000000000000000000002000000020000001c0100002508000000000000000000005f2d00003e23000000000000000000000d00000004000000040000001c010000250800009c090000eb05000078563412040000005e00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000b0000004300690074007900470072006f00750070007300000002000b00da6600005eb00000a27b00005eb000000000000002000000f0f0f00000000000000000000000000000000000010000008f00000000000000056900000db100007210000058010000320000000100000200007210000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d611a0046004b005f0041006800770061006c004d0061007000700069006e0067005f004300690074007900470072006f0075007000730004000b00d4490000b08c0000d449000044a500005091000044a500005091000018ab00000000000002000000f0f0f000000000000000000000000000000000000100000091000000000000009f410000f3a50000880e0000580100001f000000010000020000880e000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61170046004b005f0041006800770061006c004d0061007000700069006e0067005f0053006500630074006f007200730002000b0060540000b08c000060540000c8af00000000000002000000f0f0f00000000000000000000000000000000000010000009b00000000000000f6460000909d0000bb0c00005801000032000000010000020000bb0c000058010000020000000000050000800800008001000000150001000000900144420100065461686f6d61150046004b005f004300690074007900470072006f007500700073005f0053006500630074006f007200730004000b00863d000001870000863d0000649b000060540000649b000060540000c8af00000000000002000000f0f0f00000000000000000000000000000000000010000009d00000000000000503f0000139c0000f10b00005801000037000000010000020000f10b000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d61130046004b005f004300690074007900470072006f007500700073005f0041006800770061006c0002000b00603e0000fa7d00003e490000fa7d00000000000002000000f0f0f00000000000000000000000000000000000010000009f00000000000000cc3e0000a97e0000060a00005801000032000000010000020000060a000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d61100046004b005f0053006500630074006f00720073005f0041006800770061006c0004000b002c4c000088c200002c4c0000cbb300008c550000cbb300008c5500000da500000000000002000000f0f0f0000000000000000000000000000000000001000000a100000000000000db4c00007ab40000b31200005801000026000000010000020000b312000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d611f0046004b005f0050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f0067005f0050006500720073006f006e00730004000b0096960000c8af000048800000c8af00004880000010a40000fa69000010a400000000000002000000f0f0f0000000000000000000000000000000000001000000a3000000000000008f77000009a20000c8180000580100004d000000010000020000c818000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d612a0046004b005f0050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f0067005f0050006100740072006f006c0050006500720073006f006e0053007400610074006500730004000b004a180000fa130100f0310000fa130100f031000050910000f6540000509100000000000002000000f0f0f0000000000000000000000000000000000001000000a5000000000000009f320000a4ce00007611000058010000320000000100000200007611000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d611d0046004b005f0050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f0067005f005500730065007200730021433412080000004f1200005324000078563412070000001401000049006e0063006900640065006e00740073000000000000000000000000000000e5e4e43e9a99993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000131e0000a8230000000000002d0100000d0000000c000000070000001c0100005406000028050000a3020000480300004902000075030000ec040000ee020000ec040000360600004704000000000000010000004f12000053240000000000000b0000000b00000002000000020000001c0100007f0800000000000001000000930e00009505000000000000010000000100000002000000020000001c010000540600000100000000000000930e00003403000000000000000000000000000002000000020000001c01000054060000000000000000000012240000a823000000000000000000000d00000004000000040000001c01000054060000710700009204000078563412040000005c00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000a00000049006e0063006900640065006e0074007300000004000b00c864000028040100c864000009ef0000387c000009ef0000387c0000ead900000000000002000000f0f0f0000000000000000000000000000000000001000000a8000000000000002e710000b8ef00006f0f000058010000320000000100000200006f0f000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d61190046004b005f0041006800770061006c004d0061007000700069006e0067005f0049006e0063006900640065006e00740073002143341208000000c11200007d13000078563412070000001401000049006e0063006900640065006e007400730043006f006d006d0065006e007400730000005e00000060000000620000006400000066000000680000006a0000006c0000006e00000070000000720000007400000076000000780000007a0000007c0000007e00000080000000820000008400000086000000880000008a0000008c0000008e00000090000000920000009400000096000000980000009a0000009c0000009e000000a0000000a2000000a4000000a6000000a8000000aa000000ac000000ae000000b0000000b2000000b4000000b6000000b8000000ba000000bc000000be000000c0000000c200000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000131e0000cf150000000000002d010000070000000c000000070000001c0100005406000028050000a3020000480300004902000075030000ec040000ee020000ec04000036060000470400000000000001000000c11200007d13000000000000050000000500000002000000020000001c010000ca0800000000000001000000930e00009505000000000000010000000100000002000000020000001c010000540600000100000000000000930e00003403000000000000000000000000000002000000020000001c01000054060000000000000000000012240000a823000000000000000000000d00000004000000040000001c01000054060000710700009204000078563412040000006c00000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001200000049006e0063006900640065006e007400730043006f006d006d0065006e00740073000000214334120800000076120000b51e000078563412070000001401000049006e0063006900640065006e00740053006f00750072006300650073000000e5e4e43e9a99993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000131e00001c1f0000000000002d0100000b0000000c000000070000001c0100005406000028050000a3020000480300004902000075030000ec040000ee020000ec0400003606000047040000000000000100000076120000b51e000000000000090000000900000002000000020000001c0100008e0800000000000001000000930e00009505000000000000010000000100000002000000020000001c010000540600000100000000000000930e00003403000000000000000000000000000002000000020000001c01000054060000000000000000000012240000a823000000000000000000000d00000004000000040000001c01000054060000710700009204000078563412040000006800000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000001000000049006e0063006900640065006e00740053006f00750072006300650073000000214334120800000076120000120b000078563412070000001401000049006e0063006900640065006e0074005300740061007400650073000000693f0000803f0000803fd7d6563fdcdb5b3feae9693f0000803f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000131e0000cf150000000000002d010000070000000c000000070000001c0100005406000028050000a3020000480300004902000075030000ec040000ee020000ec0400003606000047040000000000000100000076120000120b000000000000020000000200000002000000020000001c0100008e0800000000000001000000930e00009505000000000000010000000100000002000000020000001c010000540600000100000000000000930e00003403000000000000000000000000000002000000020000001c01000054060000000000000000000012240000a823000000000000000000000d00000004000000040000001c01000054060000710700009204000078563412040000006600000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000f00000049006e0063006900640065006e0074005300740061007400650073000000214334120800000076120000e10d000078563412070000001401000049006e0063006900640065006e00740073005400790070006500730000000000e5e4e43e9a99993e000000000000000000000000a9a8a83e0000003f000000000000000000000000adac2c3e3333333f000000000000000000000000e1e0603d6666663f000000000000000000000000c1c0403c0000803f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000005000000540000002c0000002c0000002c000000340000000000000000000000131e0000cf150000000000002d010000070000000c000000070000001c0100005406000028050000a3020000480300004902000075030000ec040000ee020000ec0400003606000047040000000000000100000076120000e10d000000000000030000000300000002000000020000001c0100008e0800000000000001000000930e00009505000000000000010000000100000002000000020000001c010000540600000100000000000000930e00003403000000000000000000000000000002000000020000001c01000054060000000000000000000012240000a823000000000000000000000d00000004000000040000001c01000054060000710700009204000078563412040000006600000001000000010000000b000000000000000100000002000000030000000400000005000000060000000700000008000000090000000a00000004000000640062006f0000000f00000049006e0063006900640065006e007400730054007900700065007300000002000b0032470000bc15010034530000bc1501000000000002000000f0f0f0000000000000000000000000000000000001000000ae000000000000006e4500006b1601008b0f000058010000320000000100000200008b0f000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d611b0046004b005f0049006e0063006900640065006e00740073005f0049006e0063006900640065006e00740053007400610074006500730004000b002a40000082f50000af49000082f50000af490000be04010034530000be0401000000000002000000f0f0f0000000000000000000000000000000000001000000b0000000000000001e390000cffd0000e20f00005801000032000000010000020000e20f000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d611b0046004b005f0049006e0063006900640065006e00740073005f0049006e0063006900640065006e00740073005400790070006500730004000b00122b000028040100233f000028040100233f0000ea05010034530000ea0501000000000002000000f0f0f0000000000000000000000000000000000001000000b20000000000000046330000990601005510000058010000400000000100000200005510000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d611c0046004b005f0049006e0063006900640065006e00740073005f0049006e0063006900640065006e00740053006f007500720063006500730002000b004a1800008006010034530000800601000000000002000000f0f0f0000000000000000000000000000000000001000000b400000000000000653000002f070100b40a00005801000032000000010000020000b40a000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d61120046004b005f0049006e0063006900640065006e00740073005f005500730065007200730002000b0034530000a0220100d9270000a02201000000000002000000f0f0f0000000000000000000000000000000000001000000b60000000000000067340000992001003f12000058010000320000000100000200003f12000058010000020000000000ffffff000800008001000000150001000000900144420100065461686f6d611e0046004b005f0049006e0063006900640065006e007400730043006f006d006d0065006e00740073005f0049006e0063006900640065006e00740073000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000fefffffffeffffff0400000005000000060000000700000008000000090000000a0000000b0000000c0000000d0000000e0000000f000000100000001100000012000000130000001400000015000000160000001700000018000000190000001a0000001b0000001c0000001d0000001e0000001f0000002000000021000000fefffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0100feff030a0000ffffffff00000000000000000000000000000000170000004d6963726f736f66742044445320466f726d20322e300010000000456d626564646564204f626a6563740000000000f439b271000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010003000000000000000c0000000b0000004e61bc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000dbe6b0e91c81d011ad5100a0c90f5739000002004071674efffbd201020200001048450000000000000000000000000000000000f20100004400610074006100200053006f0075007200630065003d004b00480041004c004500460041004d004f004800410031004300330032005c00530051004c0045005800500052004500530053003b0049006e0069007400690061006c00200043006100740061006c006f0067003d0050006100740072006f006c0073003b0049006e00740065006700720061007400650064002000530065006300750072006900740079003d0054007200750065003b004d0075006c007400690070006c00650041006300740069007600650052006500730075006c00740053006500740073003d00460061006c00730065003b0043006f006e006e006500630074002000540069006d0065006f000300440064007300530074007200650061006d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000160002000300000006000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000470000006e4e00000000000053006300680065006d00610020005500440056002000440065006600610075006c0074000000000000000000000000000000000000000000000000000000000026000200ffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000020000001600000000000000440053005200450046002d0053004300480045004d0041002d0043004f004e00540045004e0054005300000000000000000000000000000000000000000000002c0002010500000007000000ffffffff00000000000000000000000000000000000000000000000000000000000000000000000003000000840700000000000053006300680065006d00610020005500440056002000440065006600610075006c007400200050006f007300740020005600360000000000000000000000000036000200ffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000002200000012000000000000000c000000cff5ffff4bcd00000100260000007300630068005f006c006100620065006c0073005f00760069007300690062006c0065000000010000000b0000001e000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000010000000100000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000020000000200000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000030000000300000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000000400000004000000000000003200000001ca720e01000000640062006f00000046004b005f0050006500720073006f006e0073005f0041006800770061006c0000000000000000000000c4020000000005000000050000000400000008000000016a611f286a611f0000000000000000ad0700000000000600000006000000000000003200000001ca720e01000000640062006f00000046004b005f0050006500720073006f006e0073005f00520061006e006b00730000000000000000000000c4020000000007000000070000000600000008000000016a611f686a611f0000000000000000ad070000000000080000000800000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003400370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000090000000900000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000000a0000000a000000000000003600000001ca720e01000000640062006f00000046004b005f00480061006e006400480065006c00640073005f0041006800770061006c0000000000000000000000c402000000000b0000000b0000000a000000080000000167611f6867611f0000000000000000ad0700000000000c0000000c000000000000003800000001ca720e01000000640062006f00000046004b005f0050006100740072006f006c0043006100720073005f0041006800770061006c0000000000000000000000c402000000000d0000000d0000000c00000008000000016c611fe86c611f0000000000000000ad0700000000000e0000000e00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000000f0000000f00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000001b0000001b00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000001c0000001c000000000000003e000000010f741b01000000640062006f00000046004b005f005500730065007200730052006f006c00650073004d00610070005f005500730065007200730000000000000000000000c402000000001d0000001d0000001c000000080000000166611fa866611f0000000000000000ad0700000000001e0000001e000000000000003e000000010f741b01000000640062006f00000046004b005f005500730065007200730052006f006c00650073004d00610070005f0041006800770061006c0000000000000000000000c402000000001f0000001f0000001e000000080000000167611f2867611f0000000000000000ad070000000000200000002000000000000000480000000100270001000000640062006f00000046004b005f005500730065007200730052006f006c00650073004d00610070005f005500730065007200730052006f006c006500730000000000000000000000c4020000000021000000210000002000000008000000016c611f686c611f0000000000000000ad070000000000250000002500000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000300000003000000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000310000003100000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700360030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000003300000033000000000000003e000000010f741b01000000640062006f00000046004b005f004f007000650072006100740069006f006e004c006f00670073005f005500730065007200730000000000000000000000c40200000000340000003400000033000000080000000167611fa867611f0000000000000000ad070000000000350000003500000000000000480000000100270001000000640062006f00000046004b005f004f007000650072006100740069006f006e004c006f00670073005f004f007000650072006100740069006f006e00730000000000000000000000c4020000000036000000360000003500000008000000016a611fe86a611f0000000000000000ad070000000000380000003800000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000390000003900000000000000540000000100000001000000640062006f00000046004b005f004f007000650072006100740069006f006e004c006f00670073005f004f007000650072006100740069006f006e00730053007400610074007500730000000000000000000000c402000000003a0000003a00000039000000080000000169611fe869611f0000000000000000ad0700000000003b0000003b00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003400370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000480000004800000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700360030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000490000004900000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003600370030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000004a0000004a00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c00310036003800300000004b0000004b00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003300310030002c0031002c0031003800390030002c0035002c0031003200360030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003700390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300310030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003300310030002c00310032002c0032003700330030002c00310031002c0031003600380030000000570000005700000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003000380035002c0031002c0031003600390035002c0035002c0031003100340030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003200390035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003000380035000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003000380035000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003000380035002c00310032002c0032003400360030002c00310031002c0031003500310035000000580000005800000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003000380035002c0031002c0031003600390035002c0035002c0031003100340030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003300320035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003000380035000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003000380035000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003000380035002c00310032002c0032003400360030002c00310031002c00310035003100350000005a0000005a0000000000000060000000010f741b01000000640062006f00000046004b005f00480061006e006400480065006c006400730043006800650063006b0049006e004f00750074005f0043006800650063006b0049006e004f007500740053007400610074006500730000000000000000000000c402000000005b0000005b0000005a00000008000000016c611f286c611f0000000000000000ad0700000000005e0000005e000000000000005200000001400e7401000000640062006f00000046004b005f00480061006e006400480065006c006400730043006800650063006b0049006e004f00750074005f00480061006e006400480065006c006400730000000000000000000000c402000000005f0000005f0000005e00000008000000016d611fa86d611f0000000000000000ad0700000000006c0000006c000000000000004e000000010f741b01000000640062006f00000046004b005f00480061006e006400480065006c006400730043006800650063006b0049006e004f00750074005f0050006500720073006f006e00730000000000000000000000c402000000006d0000006d0000006c000000080000000166611fe866611f0000000000000000ad0700000000006e0000006e00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003300380030002c0031002c0031003100340030002c0035002c003700350030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003200320030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003300380030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003300380030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003300380030002c00310032002c0031003600330035002c00310031002c00310030003000350000006f0000006f00000000000000480000000100690001000000640062006f00000046004b005f0050006100740072006f006c0043006800650063006b0049006e004f00750074005f0050006500720073006f006e00730000000000000000000000c4020000000070000000700000006f00000008000000016c611fa86c611f0000000000000000ad0700000000007100000071000000000000004e000000010f741b01000000640062006f00000046004b005f0050006100740072006f006c0043006800650063006b0049006e004f00750074005f0050006100740072006f006c00430061007200730000000000000000000000c4020000000072000000720000007100000008000000016d611f686d611f0000000000000000ad0700000000007300000073000000000000005a000000010f741b01000000640062006f00000046004b005f0050006100740072006f006c0043006800650063006b0049006e004f00750074005f0043006800650063006b0049006e004f007500740053007400610074006500730000000000000000000000c4020000000074000000740000007300000008000000016d611f286d611f0000000000000000ad070000000000760000007600000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003300380030002c0031002c0031003100340030002c0035002c003700350030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003500350030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003300380030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003300380030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003300380030002c00310032002c0031003600330035002c00310031002c0031003000300035000000770000007700000000000000480000000100270001000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006100740072006f006c0052006f006c006500730000000000000000000000c402000000007800000078000000770000000800000001f74d1f78f74d1f0000000000000000ad0700000000007c0000007c00000000000000460000000100270001000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006100740072006f006c00430061007200730000000000000000000000c402000000007d0000007d0000007c0000000800000001f84d1f38f84d1f0000000000000000ad0700000000007e0000007e0000000000000040000000010f741b01000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006500720073006f006e00730000000000000000000000c402000000007f0000007f0000007e0000000800000001f74d1f38f74d1f0000000000000000ad070000000000800000008000000000000000440000000100270001000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f00480061006e006400480065006c006400730000000000000000000000c402000000008100000081000000800000000800000001f64d1fb8f64d1f0000000000000000ad070000000000830000008300000000000000560000000100000001000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0050006100740072006f006c0050006500720073006f006e0053007400610074006500730000000000000000000000c402000000008400000084000000830000000800000001f74d1ff8f74d1f0000000000000000ad0700000000008600000086000000000000003e000000010f741b01000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0053006800690066007400730000000000000000000000c402000000008700000087000000860000000800000001fb4d1ff8fb4d1f0000000000000000ad0700000000008d0000008d00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003a00000034002c0030002c003200380034002c0030002c0032003000380035002c0031002c0031003600390035002c0035002c0031003100340030000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0031003900350030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0032003000380035000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0032003000380035000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0032003000380035002c00310032002c0032003400360030002c00310031002c00310035003100350000008e0000008e00000000000000460000000100270001000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f004300690074007900470072006f0075007000730000000000000000000000c402000000008f0000008f0000008e0000000800000001fb4d1f38fb4d1f0000000000000000ad07000000000090000000900000000000000040000000010f741b01000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0053006500630074006f007200730000000000000000000000c402000000009100000091000000900000000800000001f64d1f78f64d1f0000000000000000ad0700000000009a0000009a000000000000003c000000010f741b01000000640062006f00000046004b005f004300690074007900470072006f007500700073005f0053006500630074006f007200730000000000000000000000c402000000009b0000009b0000009a0000000800000001024e1fb8024e1f0000000000000000ad0700000000009c0000009c000000000000003800000001ca720e01000000640062006f00000046004b005f004300690074007900470072006f007500700073005f0041006800770061006c0000000000000000000000c402000000009d0000009d0000009c0000000800000001024e1f38024e1f0000000000000000ad0700000000009e0000009e000000000000003200000001ca720e01000000640062006f00000046004b005f0053006500630074006f00720073005f0041006800770061006c0000000000000000000000c402000000009f0000009f0000009e0000000800000001fa4d1ff8fa4d1f0000000000000000ad070000000000a0000000a00000000000000050000000010f741b01000000640062006f00000046004b005f0050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f0067005f0050006500720073006f006e00730000000000000000000000c40200000000a1000000a1000000a00000000800000001fa4d1fb8fa4d1f0000000000000000ad070000000000a2000000a200000000000000660000000100270001000000640062006f00000046004b005f0050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f0067005f0050006100740072006f006c0050006500720073006f006e0053007400610074006500730000000000000000000000c40200000000a3000000a3000000a20000000800000001fa4d1f78fa4d1f0000000000000000ad070000000000a4000000a4000000000000004c000000010f741b01000000640062006f00000046004b005f0050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f0067005f005500730065007200730000000000000000000000c40200000000a5000000a5000000a40000000800000001f64d1ff8f64d1f0000000000000000ad070000000000a6000000a600000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003600320030002c0031002c0031003300320030002c0035002c003800380035000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003100370035000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003600320030002c00310032002c0031003900300035002c00310031002c0031003100370030000000a7000000a700000000000000440000000100270001000000640062006f00000046004b005f0041006800770061006c004d0061007000700069006e0067005f0049006e0063006900640065006e007400730000000000000000000000c40200000000a8000000a8000000a70000000800000001f84d1fb8f84d1f0000000000000000ad070000000000a9000000a900000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003600320030002c0031002c0031003300320030002c0035002c003800380035000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003200350030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003600320030002c00310032002c0031003900300035002c00310031002c0031003100370030000000aa000000aa00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003600320030002c0031002c0031003300320030002c0035002c003800380035000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003100390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003600320030002c00310032002c0031003900300035002c00310031002c0031003100370030000000ab000000ab00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003600320030002c0031002c0031003300320030002c0035002c003800380035000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003100390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003600320030002c00310032002c0031003900300035002c00310031002c0031003100370030000000ac000000ac00000000000000000000000000000000000000d00200000600280000004100630074006900760065005400610062006c00650056006900650077004d006f006400650000000100000008000400000031000000200000005400610062006c00650056006900650077004d006f00640065003a00300000000100000008003800000034002c0030002c003200380034002c0030002c0031003600320030002c0031002c0031003300320030002c0035002c003800380035000000200000005400610062006c00650056006900650077004d006f00640065003a00310000000100000008001e00000032002c0030002c003200380034002c0030002c0032003100390030000000200000005400610062006c00650056006900650077004d006f00640065003a00320000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00330000000100000008001e00000032002c0030002c003200380034002c0030002c0031003600320030000000200000005400610062006c00650056006900650077004d006f00640065003a00340000000100000008003e00000034002c0030002c003200380034002c0030002c0031003600320030002c00310032002c0031003900300035002c00310031002c0031003100370030000000ad000000ad00000000000000480000000100690001000000640062006f00000046004b005f0049006e0063006900640065006e00740073005f0049006e0063006900640065006e00740053007400610074006500730000000000000000000000c40200000000ae000000ae000000ad0000000800000001f64d1f38f64d1f0000000000000000ad070000000000af000000af00000000000000480000000100000001000000640062006f00000046004b005f0049006e0063006900640065006e00740073005f0049006e0063006900640065006e00740073005400790070006500730000000000000000000000c40200000000b0000000b0000000af0000000800000001f94d1f38f94d1f0000000000000000ad070000000000b1000000b1000000000000004a000000010f741b01000000640062006f00000046004b005f0049006e0063006900640065006e00740073005f0049006e0063006900640065006e00740053006f007500720063006500730000000000000000000000c40200000000b2000000b2000000b10000000800000001fa4d1f38fa4d1f0000000000000000ad070000000000b3000000b3000000000000003600000001ca720e01000000640062006f00000046004b005f0049006e0063006900640065006e00740073005f005500730065007200730000000000000000000000c40200000000b4000000b4000000b30000000800000001f54d1fb8f54d1f0000000000000000ad070000000000b5000000b5000000000000004e000000010f741b01000000640062006f00000046004b005f0049006e0063006900640065006e007400730043006f006d006d0065006e00740073005f0049006e0063006900640065006e007400730000000000000000000000c40200000000b6000000b6000000b5000000080000000171611f6871611f0000000000000000ad0f0000010000b40000009c000000010000008d000000490000000000000004000000010000000200000025000000240000000a000000010000000800000019000000240000000c000000010000000900000047000000000000001e000000010000001b00000024000000250000009e00000001000000250000004b00000050000000a0000000020000007600000048000000010000007e000000020000003b0000004b0000009a0000006c00000002000000580000004a000000430000006f000000020000006e000000780000003f000000060000000300000002000000590000006c00000080000000080000003b0000004d0000004a0000005e000000080000005800000060000000570000007c000000090000003b0000004b000000e600000071000000090000006e0000004a0000007f000000a40000000e0000007600000079000000460000001c0000000e0000001b0000000000000049000000330000000e00000030000000610000006a000000b30000000e000000a60000004b00000042000000200000000f0000001b000000580000005d00000090000000250000003b00000001000000480000009a000000250000008d0000002500000000000000350000003100000030000000580000006b0000003900000038000000300000002400000025000000a200000048000000760000004a0000008700000083000000480000003b0000004a0000005900000077000000490000003b00000048000000ab000000860000004b0000003b00000031000000000000005a00000057000000580000001e0000001f00000073000000570000006e0000003f000000660000008e0000008d0000003b0000003f0000005a000000b5000000a6000000a9000000a20000003f000000a7000000a60000003b0000003a00000001000000b1000000aa000000a6000000a100000040000000ad000000ab000000a60000003d00000076000000af000000ac000000a6000000670000003c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000750074003d00330030003b0054007200750073007400530065007200760065007200430065007200740069006600690063006100740065003d0054007200750065003b005000610063006b00650074002000530069007a0065003d0034003000390036003b004100700070006c00690063006100740069006f006e0020004e0061006d0065003d0022004d006900630072006f0073006f00660074002000530051004c00200053006500720076006500720020004d0061006e006100670065006d0065006e0074002000530074007500640069006f0020002d002000510075006500720079002200000000800500140000004400690061006700720061006d005f0030000000000226001e00000049006e0063006900640065006e007400730054007900700065007300000008000000640062006f000000000226001e00000049006e0063006900640065006e007400530074006100740065007300000008000000640062006f000000000226002000000049006e0063006900640065006e00740053006f0075007200630065007300000008000000640062006f000000000226002400000049006e0063006900640065006e007400730043006f006d006d0065006e0074007300000008000000640062006f000000000226001400000049006e0063006900640065006e0074007300000008000000640062006f00000000022600160000004300690074007900470072006f00750070007300000008000000640062006f000000000226002a00000050006100740072006f006c0050006500720073006f006e00530074006100740065004c006f006700000008000000640062006f000000000226002200000050006100740072006f006c0043006800650063006b0049006e004f0075007400000008000000640062006f0000000002260028000000480061006e006400480065006c006400730043006800650063006b0049006e004f0075007400000008000000640062006f000000000226002200000043006800650063006b0049006e004f0075007400530074006100740065007300000008000000640062006f000000000226000e000000530068006900660074007300000008000000640062006f000000000226002000000052006500730065007200760065006400430061006c006c00650072007300000008000000640062006f000000000226001800000050006100740072006f006c0052006f006c0065007300000008000000640062006f000000000226002600000050006100740072006f006c0050006500720073006f006e00530074006100740065007300000008000000640062006f000000000226001a00000041006800770061006c004d0061007000700069006e006700000008000000640062006f00000000022600220000004f007000650072006100740069006f006e007300530074006100740075007300000008000000640062006f00000000022600160000004f007000650072006100740069006f006e007300000008000000640062006f000000000226001c0000004f007000650072006100740069006f006e004c006f0067007300000008000000640062006f000000000226001000000053006500630074006f0072007300000008000000640062006f000000000226001c0000005500730065007200730052006f006c00650073004d0061007000000008000000640062006f00000000022600160000005500730065007200730052006f006c0065007300000008000000640062006f000000000226000c00000055007300650072007300000008000000640062006f000000000226001600000050006100740072006f006c004300610072007300000008000000640062006f0000000002260014000000480061006e006400480065006c0064007300000008000000640062006f000000000226000c000000520061006e006b007300000008000000640062006f000000000226001000000050006500720073006f006e007300000008000000640062006f000000000224000c00000041006800770061006c00000008000000640062006f00000001000000d68509b3bb6bf2459ab8371664f0327008004e0000007b00310036003300340043004400440037002d0030003800380038002d0034003200450033002d0039004600410032002d004200360044003300320035003600330042003900310044007d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010003000000000000000c0000000b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062885214
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               2437.dat                                                                                            0000600 0004000 0002000 00000002546 13353144341 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	admin	Admin	admin	* TRIAL * TRIAL 	0	2018-09-12 09:34:21.507	2018-09-11 13:18:13.427	\N	0	\N	\N	page1|group4|sort4|a2|a3|a4|a9|hierarchy18|0|-1|1|-1|2|-1|3|-1|4|-1|5|-1|6|-1|7|-1|8|-1|9|-1|10|-1|11|-1|12|-1|13|-1|14|-1|15|-1|16|-1|17|-1|visible18|t0|f1|t2|t3|t4|t5|t6|t7|t8|t9|t10|f11|t12|t13|t14|t15|f16|t17|width18|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e	* TRIAL * TRIAL * TRIAL * TRIAL * TRIA
6	turki	تركي المهندي	turki	fXfpwvZTj7GFrnkP	0	2018-09-19 07:01:21.593	2018-09-17 09:39:54.03	\N	0	page1|group4|sort4|a1|a2|a3|a8|hierarchy19|0|-1|1|-1|2|-1|3|-1|4|-1|5|-1|6|-1|7|-1|8|-1|9|-1|10|-1|11|-1|12|-1|13|-1|14|-1|15|-1|16|-1|17|-1|18|-1|visible19|f0|t1|t2|t3|t4|t5|t6|t9|t7|t8|f10|t11|t12|t13|t14|t15|t16|f17|t18|width19|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e|e	0;1;2;3;6;7;9;13;14;16;18;19;21;22;23;	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 	0;1;2;3;6;7;9;15;16;18;20;21;23;24;25;
7	zgggg	gggggg	zgggg	fXfpwvZTj7GFrnkP	0	2018-09-12 09:40:22.8	\N	\N	0	\N	\N	\N	\N
8	zgggggg	gggggg	* TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL * TRIAL 	fXfpwvZTj7GFrnkP	0	\N	\N	\N	0	\N	\N	\N	\N
\.


                                                                                                                                                          2454.dat                                                                                            0000600 0004000 0002000 00000000145 13353144341 0014251 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        0	Admin
10	الأحول
20	الصيانه
30	العمليات
40	تسجيل دخول وخروج
\.


                                                                                                                                                                                                                                                                                                                                                                                                                           2455.dat                                                                                            0000600 0004000 0002000 00000000147 13353144341 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	30
6	1	10
6	1	20
6	1	30
6	1	40
6	2	10
6	2	20
6	2	30
6	2	40
7	1	30
7	2	30
7	3	30
7	4	30
8	1	30
\.


                                                                                                                                                                                                                                                                                                                                                                                                                         restore.sql                                                                                         0000600 0004000 0002000 00000154315 13353144341 0015376 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT fk_usersrolesmap_usersroles;
ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT fk_usersrolesmap_users;
ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT fk_usersrolesmap_ahwal;
ALTER TABLE ONLY public.sectors DROP CONSTRAINT fk_sectors_ahwal;
ALTER TABLE ONLY public.persons DROP CONSTRAINT fk_persons_ranks;
ALTER TABLE ONLY public.persons DROP CONSTRAINT fk_persons_ahwal;
ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT fk_patrolpersonstatelog_users;
ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT fk_patrolpersonstatelog_persons;
ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT fk_patrolpersonstatelog_patrolpersonstates;
ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT fk_patrolcheckinout_persons;
ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT fk_patrolcheckinout_patrolcars;
ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT fk_patrolcheckinout_checkinoutstates;
ALTER TABLE ONLY public.patrolcars DROP CONSTRAINT fk_patrolcars_ahwal;
ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT fk_operationlogs_users;
ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT fk_operationlogs_operationsstatus;
ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT fk_operationlogs_operations;
ALTER TABLE ONLY public.livecallers DROP CONSTRAINT fk_livecallers_handhelds;
ALTER TABLE ONLY public.incidentsview DROP CONSTRAINT fk_incidentsview_users;
ALTER TABLE ONLY public.incidentsview DROP CONSTRAINT fk_incidentsview_incidents;
ALTER TABLE ONLY public.incidentscomments DROP CONSTRAINT fk_incidentscomments_users;
ALTER TABLE ONLY public.incidentscomments DROP CONSTRAINT fk_incidentscomments_incidents;
ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_users;
ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_incidentstypes;
ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_incidentstates;
ALTER TABLE ONLY public.incidents DROP CONSTRAINT fk_incidents_incidentsources;
ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT fk_handheldscheckinout_persons;
ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT fk_handheldscheckinout_handhelds;
ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT fk_handheldscheckinout_checkinoutstates;
ALTER TABLE ONLY public.handhelds DROP CONSTRAINT fk_handhelds_ahwal;
ALTER TABLE ONLY public.citygroups DROP CONSTRAINT fk_citygroups_sectors;
ALTER TABLE ONLY public.citygroups DROP CONSTRAINT fk_citygroups_ahwal;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_shifts;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_sectors;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_persons;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_patrolroles;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_patrolpersonstates;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_patrolcars;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_incidents;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_handhelds;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT fk_ahwalmapping_citygroups;
DROP INDEX public.uk_principal_name;
ALTER TABLE ONLY public.usersrolesmap DROP CONSTRAINT pk_usersrolesmap;
ALTER TABLE ONLY public.users DROP CONSTRAINT pk_users;
ALTER TABLE ONLY public.usersroles DROP CONSTRAINT pk_userroles;
ALTER TABLE ONLY public.shifts DROP CONSTRAINT pk_shifts;
ALTER TABLE ONLY public.sectors DROP CONSTRAINT pk_sectors;
ALTER TABLE ONLY public.reservedcallers DROP CONSTRAINT pk_reservedcallers;
ALTER TABLE ONLY public.ranks DROP CONSTRAINT pk_ranks;
ALTER TABLE ONLY public.persons DROP CONSTRAINT pk_persons_1;
ALTER TABLE ONLY public.patrolroles DROP CONSTRAINT pk_patrolroles;
ALTER TABLE ONLY public.patrolpersonstates DROP CONSTRAINT pk_patrolpersonstates;
ALTER TABLE ONLY public.patrolpersonstatelog DROP CONSTRAINT pk_patrolpersonstatelog;
ALTER TABLE ONLY public.patrolcheckinout DROP CONSTRAINT pk_patrolcheckinout;
ALTER TABLE ONLY public.patrolcars DROP CONSTRAINT pk_patrolcars;
ALTER TABLE ONLY public.operationsstatus DROP CONSTRAINT pk_operationsstatus;
ALTER TABLE ONLY public.operations DROP CONSTRAINT pk_operations;
ALTER TABLE ONLY public.operationlogs DROP CONSTRAINT pk_operationlogs;
ALTER TABLE ONLY public.livecallersunknown DROP CONSTRAINT pk_livecallerunknown;
ALTER TABLE ONLY public.livecallers DROP CONSTRAINT pk_livecallers;
ALTER TABLE ONLY public.incidentstypes DROP CONSTRAINT pk_incidenttypes;
ALTER TABLE ONLY public.incidentsview DROP CONSTRAINT pk_incidentsview;
ALTER TABLE ONLY public.incidentstates DROP CONSTRAINT pk_incidentstates;
ALTER TABLE ONLY public.incidentsources DROP CONSTRAINT pk_incidentsources;
ALTER TABLE ONLY public.incidents DROP CONSTRAINT pk_incidents;
ALTER TABLE ONLY public.incidentscomments DROP CONSTRAINT pk_incidentcomments;
ALTER TABLE ONLY public.handheldscheckinout DROP CONSTRAINT pk_handheldscheckinout;
ALTER TABLE ONLY public.handhelds DROP CONSTRAINT pk_handhelds;
ALTER TABLE ONLY public.citygroups DROP CONSTRAINT pk_citygroups;
ALTER TABLE ONLY public.checkinoutstates DROP CONSTRAINT pk_checkinoutstates;
ALTER TABLE ONLY public.ahwalmapping DROP CONSTRAINT pk_ahwalmapping;
ALTER TABLE ONLY public.ahwal DROP CONSTRAINT pk_ahwal;
ALTER TABLE ONLY public.sysdiagrams DROP CONSTRAINT pk__sysdiagr__c2b05b618ed7f4a5;
DROP TABLE public.usersrolesmap;
DROP TABLE public.usersroles;
DROP TABLE public.users;
DROP SEQUENCE public.users_seq;
DROP TABLE public.sysdiagrams;
DROP SEQUENCE public.sysdiagrams_seq;
DROP TABLE public.shifts;
DROP SEQUENCE public.shifts_seq;
DROP TABLE public.sectors;
DROP TABLE public.reservedcallers;
DROP SEQUENCE public.reservedcallers_seq;
DROP TABLE public.ranks;
DROP TABLE public.persons;
DROP SEQUENCE public.persons_seq;
DROP TABLE public.patrolroles;
DROP TABLE public.patrolpersonstates;
DROP TABLE public.patrolpersonstatelog;
DROP SEQUENCE public.patrolpersonstatelog_seq;
DROP TABLE public.patrolcheckinout;
DROP SEQUENCE public.patrolcheckinout_seq;
DROP TABLE public.patrolcars;
DROP SEQUENCE public.patrolcars_seq;
DROP TABLE public.operationsstatus;
DROP SEQUENCE public.operationsstatus_seq;
DROP TABLE public.operations;
DROP SEQUENCE public.operations_seq;
DROP TABLE public.operationlogs;
DROP SEQUENCE public.operationlogs_seq;
DROP TABLE public.livecallersunknown;
DROP SEQUENCE public.livecallersunknown_seq;
DROP TABLE public.livecallers;
DROP SEQUENCE public.livecallers_seq;
DROP TABLE public.incidentsview;
DROP TABLE public.incidentstypes;
DROP TABLE public.incidentstates;
DROP TABLE public.incidentsources;
DROP TABLE public.incidentscomments;
DROP SEQUENCE public.incidentscomments_seq;
DROP TABLE public.incidents;
DROP SEQUENCE public.incidents_seq;
DROP TABLE public.handheldscheckinout;
DROP SEQUENCE public.handheldscheckinout_seq;
DROP TABLE public.handhelds;
DROP SEQUENCE public.handhelds_seq;
DROP TABLE public.citygroups;
DROP TABLE public.checkinoutstates;
DROP TABLE public.ahwalmapping;
DROP SEQUENCE public.ahwalmapping_seq;
DROP TABLE public.ahwal;
DROP SEQUENCE public.ahwal_seq;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: ahwal_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ahwal_seq
    START WITH 5
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ahwal_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ahwal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ahwal (
    ahwalid bigint DEFAULT nextval('public.ahwal_seq'::regclass) NOT NULL,
    name character varying(500)
);


ALTER TABLE public.ahwal OWNER TO postgres;

--
-- Name: ahwalmapping_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ahwalmapping_seq
    START WITH 10145
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ahwalmapping_seq OWNER TO postgres;

--
-- Name: ahwalmapping; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ahwalmapping (
    ahwalmappingid bigint DEFAULT nextval('public.ahwalmapping_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    shiftid integer NOT NULL,
    sectorid bigint NOT NULL,
    patrolroleid integer NOT NULL,
    citygroupid bigint NOT NULL,
    personid bigint NOT NULL,
    hasfixedcallerid smallint DEFAULT 0 NOT NULL,
    callerid character varying(50),
    hasdevices smallint DEFAULT 0 NOT NULL,
    handheldid bigint,
    patrolid bigint,
    patrolpersonstateid integer,
    laststatechangetimestamp timestamp without time zone,
    sunrisetimestamp timestamp without time zone,
    sunsettimestamp timestamp without time zone,
    lastlandtimestamp timestamp without time zone,
    lastseatimestamp timestamp without time zone,
    lastawaytimestamp timestamp without time zone,
    lastcomebacktimestamp timestamp without time zone,
    incidentid bigint,
    associtatepersonid bigint,
    sortingindex bigint DEFAULT 10000 NOT NULL
);


ALTER TABLE public.ahwalmapping OWNER TO postgres;

--
-- Name: checkinoutstates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.checkinoutstates (
    checkinoutstateid bigint NOT NULL,
    name character varying(500) NOT NULL
);


ALTER TABLE public.checkinoutstates OWNER TO postgres;

--
-- Name: citygroups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.citygroups (
    citygroupid bigint NOT NULL,
    ahwalid bigint,
    sectorid bigint,
    shortname character varying(50),
    callerprefix character varying(50),
    text character varying(4000),
    disabled smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.citygroups OWNER TO postgres;

--
-- Name: handhelds_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.handhelds_seq
    START WITH 10010
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.handhelds_seq OWNER TO postgres;

--
-- Name: handhelds; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.handhelds (
    handheldid bigint DEFAULT nextval('public.handhelds_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    serial character varying(50) NOT NULL,
    barcode character varying(50) NOT NULL,
    defective smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.handhelds OWNER TO postgres;

--
-- Name: handheldscheckinout_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.handheldscheckinout_seq
    START WITH 10020
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.handheldscheckinout_seq OWNER TO postgres;

--
-- Name: handheldscheckinout; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.handheldscheckinout (
    handheldcheckinoutid bigint DEFAULT nextval('public.handheldscheckinout_seq'::regclass) NOT NULL,
    checkinoutstateid bigint NOT NULL,
    handheldid bigint NOT NULL,
    personid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);


ALTER TABLE public.handheldscheckinout OWNER TO postgres;

--
-- Name: incidents_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.incidents_seq
    START WITH 24
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.incidents_seq OWNER TO postgres;

--
-- Name: incidents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidents (
    incidentid bigint DEFAULT nextval('public.incidents_seq'::regclass) NOT NULL,
    incidenttypeid integer NOT NULL,
    incidentstateid integer NOT NULL,
    place character varying(4000),
    incidentsourceid integer NOT NULL,
    incidentsourceextrainfo1 character varying(4000),
    incidentsourceextrainfo2 character varying(4000),
    incidentsourceextrainfo3 character varying(4000),
    userid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    lastupdate timestamp without time zone NOT NULL
);


ALTER TABLE public.incidents OWNER TO postgres;

--
-- Name: incidentscomments_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.incidentscomments_seq
    START WITH 171
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.incidentscomments_seq OWNER TO postgres;

--
-- Name: incidentscomments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidentscomments (
    incidentcommentid bigint DEFAULT nextval('public.incidentscomments_seq'::regclass) NOT NULL,
    incidentid bigint NOT NULL,
    text character varying(4000),
    userid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);


ALTER TABLE public.incidentscomments OWNER TO postgres;

--
-- Name: incidentsources; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidentsources (
    incidentsourceid integer NOT NULL,
    name character varying(400) NOT NULL,
    mainextrainfonumber integer DEFAULT 0 NOT NULL,
    extrainfo1 character varying(400),
    extrainfo2 character varying(400),
    extrainfo3 character varying(400),
    requiresextrainfo1 smallint DEFAULT 0 NOT NULL,
    requiresextrainfo2 smallint DEFAULT 0 NOT NULL,
    requiresextrainfo3 smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.incidentsources OWNER TO postgres;

--
-- Name: incidentstates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidentstates (
    incidentstateid integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.incidentstates OWNER TO postgres;

--
-- Name: incidentstypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidentstypes (
    incidenttypeid integer NOT NULL,
    name character varying(400) NOT NULL,
    priority integer
);


ALTER TABLE public.incidentstypes OWNER TO postgres;

--
-- Name: incidentsview; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.incidentsview (
    incidentid bigint NOT NULL,
    userid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);


ALTER TABLE public.incidentsview OWNER TO postgres;

--
-- Name: livecallers_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.livecallers_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.livecallers_seq OWNER TO postgres;

--
-- Name: livecallers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.livecallers (
    livecallerid bigint DEFAULT nextval('public.livecallers_seq'::regclass) NOT NULL,
    handheldid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    processed smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.livecallers OWNER TO postgres;

--
-- Name: livecallersunknown_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.livecallersunknown_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.livecallersunknown_seq OWNER TO postgres;

--
-- Name: livecallersunknown; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.livecallersunknown (
    livecallerunknownid bigint DEFAULT nextval('public.livecallersunknown_seq'::regclass) NOT NULL,
    handheldnumbername character varying(500) NOT NULL,
    "timestamp" timestamp without time zone NOT NULL,
    processed smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.livecallersunknown OWNER TO postgres;

--
-- Name: operationlogs_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.operationlogs_seq
    START WITH 21820
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.operationlogs_seq OWNER TO postgres;

--
-- Name: operationlogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.operationlogs (
    logid bigint DEFAULT nextval('public.operationlogs_seq'::regclass) NOT NULL,
    userid bigint NOT NULL,
    operationid integer NOT NULL,
    "timestamp" timestamp without time zone DEFAULT '2018-09-20 10:34:19.359033'::timestamp without time zone NOT NULL,
    statusid integer NOT NULL,
    text character varying(500)
);


ALTER TABLE public.operationlogs OWNER TO postgres;

--
-- Name: operations_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.operations_seq
    START WITH 35
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.operations_seq OWNER TO postgres;

--
-- Name: operations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.operations (
    opeartionid integer DEFAULT nextval('public.operations_seq'::regclass) NOT NULL,
    name character varying(500) NOT NULL
);


ALTER TABLE public.operations OWNER TO postgres;

--
-- Name: operationsstatus_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.operationsstatus_seq
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.operationsstatus_seq OWNER TO postgres;

--
-- Name: operationsstatus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.operationsstatus (
    statusid integer DEFAULT nextval('public.operationsstatus_seq'::regclass) NOT NULL,
    name character varying(500) NOT NULL
);


ALTER TABLE public.operationsstatus OWNER TO postgres;

--
-- Name: patrolcars_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patrolcars_seq
    START WITH 10023
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patrolcars_seq OWNER TO postgres;

--
-- Name: patrolcars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patrolcars (
    patrolid bigint DEFAULT nextval('public.patrolcars_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    platenumber character varying(50) NOT NULL,
    barcode character varying(50) NOT NULL,
    model character varying(50),
    type character varying(50),
    vinnumber character varying(50),
    defective smallint DEFAULT 0 NOT NULL,
    rental smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.patrolcars OWNER TO postgres;

--
-- Name: patrolcheckinout_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patrolcheckinout_seq
    START WITH 10020
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patrolcheckinout_seq OWNER TO postgres;

--
-- Name: patrolcheckinout; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patrolcheckinout (
    patrolcheckinoutid bigint DEFAULT nextval('public.patrolcheckinout_seq'::regclass) NOT NULL,
    checkinoutstateid bigint NOT NULL,
    patrolid bigint NOT NULL,
    personid bigint NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);


ALTER TABLE public.patrolcheckinout OWNER TO postgres;

--
-- Name: patrolpersonstatelog_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patrolpersonstatelog_seq
    START WITH 10209
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patrolpersonstatelog_seq OWNER TO postgres;

--
-- Name: patrolpersonstatelog; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patrolpersonstatelog (
    patrolpersonstatelogid bigint DEFAULT nextval('public.patrolpersonstatelog_seq'::regclass) NOT NULL,
    userid bigint NOT NULL,
    personid bigint NOT NULL,
    patrolpersonstateid integer NOT NULL,
    "timestamp" timestamp without time zone NOT NULL
);


ALTER TABLE public.patrolpersonstatelog OWNER TO postgres;

--
-- Name: patrolpersonstates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patrolpersonstates (
    patrolpersonstateid integer NOT NULL,
    name character varying(500)
);


ALTER TABLE public.patrolpersonstates OWNER TO postgres;

--
-- Name: patrolroles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patrolroles (
    patrolroleid integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.patrolroles OWNER TO postgres;

--
-- Name: persons_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.persons_seq
    START WITH 28
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.persons_seq OWNER TO postgres;

--
-- Name: persons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.persons (
    personid bigint DEFAULT nextval('public.persons_seq'::regclass) NOT NULL,
    ahwalid bigint NOT NULL,
    milnumber bigint NOT NULL,
    rankid integer NOT NULL,
    name character varying(500),
    mobile character varying(50),
    fixedcallerid character varying(50)
);


ALTER TABLE public.persons OWNER TO postgres;

--
-- Name: ranks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ranks (
    rankid integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.ranks OWNER TO postgres;

--
-- Name: reservedcallers_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reservedcallers_seq
    START WITH 4
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservedcallers_seq OWNER TO postgres;

--
-- Name: reservedcallers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservedcallers (
    reservedid integer DEFAULT nextval('public.reservedcallers_seq'::regclass) NOT NULL,
    reservedcallerid character varying(50)
);


ALTER TABLE public.reservedcallers OWNER TO postgres;

--
-- Name: sectors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sectors (
    sectorid bigint NOT NULL,
    ahwalid bigint,
    shortname character varying(500) NOT NULL,
    callerprefix character(2),
    disabled smallint DEFAULT 0 NOT NULL
);


ALTER TABLE public.sectors OWNER TO postgres;

--
-- Name: shifts_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shifts_seq
    START WITH 4
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shifts_seq OWNER TO postgres;

--
-- Name: shifts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shifts (
    shiftid integer DEFAULT nextval('public.shifts_seq'::regclass) NOT NULL,
    name character varying(50),
    startinghour integer NOT NULL,
    numberofhours integer NOT NULL
);


ALTER TABLE public.shifts OWNER TO postgres;

--
-- Name: sysdiagrams_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sysdiagrams_seq
    START WITH 2
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sysdiagrams_seq OWNER TO postgres;

--
-- Name: sysdiagrams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sysdiagrams (
    name character varying(128) NOT NULL,
    principal_id integer NOT NULL,
    diagram_id integer DEFAULT nextval('public.sysdiagrams_seq'::regclass) NOT NULL,
    version integer,
    definition bytea
);


ALTER TABLE public.sysdiagrams OWNER TO postgres;

--
-- Name: users_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_seq
    START WITH 9
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_seq OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    userid bigint DEFAULT nextval('public.users_seq'::regclass) NOT NULL,
    username character varying(50) NOT NULL,
    name character varying(500),
    password character varying(500) NOT NULL,
    salt character varying(50) NOT NULL,
    failedlogins integer DEFAULT 0 NOT NULL,
    lastsuccesslogin timestamp without time zone,
    lastfailedlogin timestamp without time zone,
    lastipaddress character varying(50),
    accountlocked smallint DEFAULT 0 NOT NULL,
    layout_ahwalmapping character varying(4000),
    layout_groups_ahawalmapping character varying(4000),
    layout_opslive character varying(4000),
    layout_groups_opslivegrid character varying(4000)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: usersroles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usersroles (
    userroleid integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.usersroles OWNER TO postgres;

--
-- Name: usersrolesmap; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usersrolesmap (
    userid bigint NOT NULL,
    ahwalid bigint NOT NULL,
    userroleid integer NOT NULL
);


ALTER TABLE public.usersrolesmap OWNER TO postgres;

--
-- Data for Name: ahwal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ahwal (ahwalid, name) FROM stdin;
\.
COPY public.ahwal (ahwalid, name) FROM '$$PATH$$/2425.dat';

--
-- Name: ahwal_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ahwal_seq', 5, false);


--
-- Data for Name: ahwalmapping; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ahwalmapping (ahwalmappingid, ahwalid, shiftid, sectorid, patrolroleid, citygroupid, personid, hasfixedcallerid, callerid, hasdevices, handheldid, patrolid, patrolpersonstateid, laststatechangetimestamp, sunrisetimestamp, sunsettimestamp, lastlandtimestamp, lastseatimestamp, lastawaytimestamp, lastcomebacktimestamp, incidentid, associtatepersonid, sortingindex) FROM stdin;
\.
COPY public.ahwalmapping (ahwalmappingid, ahwalid, shiftid, sectorid, patrolroleid, citygroupid, personid, hasfixedcallerid, callerid, hasdevices, handheldid, patrolid, patrolpersonstateid, laststatechangetimestamp, sunrisetimestamp, sunsettimestamp, lastlandtimestamp, lastseatimestamp, lastawaytimestamp, lastcomebacktimestamp, incidentid, associtatepersonid, sortingindex) FROM '$$PATH$$/2440.dat';

--
-- Name: ahwalmapping_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ahwalmapping_seq', 10145, false);


--
-- Data for Name: checkinoutstates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.checkinoutstates (checkinoutstateid, name) FROM stdin;
\.
COPY public.checkinoutstates (checkinoutstateid, name) FROM '$$PATH$$/2441.dat';

--
-- Data for Name: citygroups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.citygroups (citygroupid, ahwalid, sectorid, shortname, callerprefix, text, disabled) FROM stdin;
\.
COPY public.citygroups (citygroupid, ahwalid, sectorid, shortname, callerprefix, text, disabled) FROM '$$PATH$$/2439.dat';

--
-- Data for Name: handhelds; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.handhelds (handheldid, ahwalid, serial, barcode, defective) FROM stdin;
\.
COPY public.handhelds (handheldid, ahwalid, serial, barcode, defective) FROM '$$PATH$$/2427.dat';

--
-- Name: handhelds_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.handhelds_seq', 10010, false);


--
-- Data for Name: handheldscheckinout; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.handheldscheckinout (handheldcheckinoutid, checkinoutstateid, handheldid, personid, "timestamp") FROM stdin;
\.
COPY public.handheldscheckinout (handheldcheckinoutid, checkinoutstateid, handheldid, personid, "timestamp") FROM '$$PATH$$/2442.dat';

--
-- Name: handheldscheckinout_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.handheldscheckinout_seq', 10020, false);


--
-- Data for Name: incidents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidents (incidentid, incidenttypeid, incidentstateid, place, incidentsourceid, incidentsourceextrainfo1, incidentsourceextrainfo2, incidentsourceextrainfo3, userid, "timestamp", lastupdate) FROM stdin;
\.
COPY public.incidents (incidentid, incidenttypeid, incidentstateid, place, incidentsourceid, incidentsourceextrainfo1, incidentsourceextrainfo2, incidentsourceextrainfo3, userid, "timestamp", lastupdate) FROM '$$PATH$$/2438.dat';

--
-- Name: incidents_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.incidents_seq', 24, false);


--
-- Data for Name: incidentscomments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidentscomments (incidentcommentid, incidentid, text, userid, "timestamp") FROM stdin;
\.
COPY public.incidentscomments (incidentcommentid, incidentid, text, userid, "timestamp") FROM '$$PATH$$/2443.dat';

--
-- Name: incidentscomments_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.incidentscomments_seq', 171, false);


--
-- Data for Name: incidentsources; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidentsources (incidentsourceid, name, mainextrainfonumber, extrainfo1, extrainfo2, extrainfo3, requiresextrainfo1, requiresextrainfo2, requiresextrainfo3) FROM stdin;
\.
COPY public.incidentsources (incidentsourceid, name, mainextrainfonumber, extrainfo1, extrainfo2, extrainfo3, requiresextrainfo1, requiresextrainfo2, requiresextrainfo3) FROM '$$PATH$$/2428.dat';

--
-- Data for Name: incidentstates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidentstates (incidentstateid, name) FROM stdin;
\.
COPY public.incidentstates (incidentstateid, name) FROM '$$PATH$$/2435.dat';

--
-- Data for Name: incidentstypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidentstypes (incidenttypeid, name, priority) FROM stdin;
\.
COPY public.incidentstypes (incidenttypeid, name, priority) FROM '$$PATH$$/2436.dat';

--
-- Data for Name: incidentsview; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.incidentsview (incidentid, userid, "timestamp") FROM stdin;
\.
COPY public.incidentsview (incidentid, userid, "timestamp") FROM '$$PATH$$/2444.dat';

--
-- Data for Name: livecallers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.livecallers (livecallerid, handheldid, "timestamp", processed) FROM stdin;
\.
COPY public.livecallers (livecallerid, handheldid, "timestamp", processed) FROM '$$PATH$$/2445.dat';

--
-- Name: livecallers_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.livecallers_seq', 1, false);


--
-- Data for Name: livecallersunknown; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.livecallersunknown (livecallerunknownid, handheldnumbername, "timestamp", processed) FROM stdin;
\.
COPY public.livecallersunknown (livecallerunknownid, handheldnumbername, "timestamp", processed) FROM '$$PATH$$/2446.dat';

--
-- Name: livecallersunknown_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.livecallersunknown_seq', 1, false);


--
-- Data for Name: operationlogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.operationlogs (logid, userid, operationid, "timestamp", statusid, text) FROM stdin;
\.
COPY public.operationlogs (logid, userid, operationid, "timestamp", statusid, text) FROM '$$PATH$$/2449.dat';

--
-- Name: operationlogs_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.operationlogs_seq', 21820, false);


--
-- Data for Name: operations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.operations (opeartionid, name) FROM stdin;
\.
COPY public.operations (opeartionid, name) FROM '$$PATH$$/2447.dat';

--
-- Name: operations_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.operations_seq', 35, false);


--
-- Data for Name: operationsstatus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.operationsstatus (statusid, name) FROM stdin;
\.
COPY public.operationsstatus (statusid, name) FROM '$$PATH$$/2448.dat';

--
-- Name: operationsstatus_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.operationsstatus_seq', 7, false);


--
-- Data for Name: patrolcars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patrolcars (patrolid, ahwalid, platenumber, barcode, model, type, vinnumber, defective, rental) FROM stdin;
\.
COPY public.patrolcars (patrolid, ahwalid, platenumber, barcode, model, type, vinnumber, defective, rental) FROM '$$PATH$$/2429.dat';

--
-- Name: patrolcars_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patrolcars_seq', 10023, false);


--
-- Data for Name: patrolcheckinout; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patrolcheckinout (patrolcheckinoutid, checkinoutstateid, patrolid, personid, "timestamp") FROM stdin;
\.
COPY public.patrolcheckinout (patrolcheckinoutid, checkinoutstateid, patrolid, personid, "timestamp") FROM '$$PATH$$/2450.dat';

--
-- Name: patrolcheckinout_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patrolcheckinout_seq', 10020, false);


--
-- Data for Name: patrolpersonstatelog; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patrolpersonstatelog (patrolpersonstatelogid, userid, personid, patrolpersonstateid, "timestamp") FROM stdin;
\.
COPY public.patrolpersonstatelog (patrolpersonstatelogid, userid, personid, patrolpersonstateid, "timestamp") FROM '$$PATH$$/2451.dat';

--
-- Name: patrolpersonstatelog_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patrolpersonstatelog_seq', 10209, false);


--
-- Data for Name: patrolpersonstates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patrolpersonstates (patrolpersonstateid, name) FROM stdin;
\.
COPY public.patrolpersonstates (patrolpersonstateid, name) FROM '$$PATH$$/2430.dat';

--
-- Data for Name: patrolroles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patrolroles (patrolroleid, name) FROM stdin;
\.
COPY public.patrolroles (patrolroleid, name) FROM '$$PATH$$/2431.dat';

--
-- Data for Name: persons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.persons (personid, ahwalid, milnumber, rankid, name, mobile, fixedcallerid) FROM stdin;
\.
COPY public.persons (personid, ahwalid, milnumber, rankid, name, mobile, fixedcallerid) FROM '$$PATH$$/2434.dat';

--
-- Name: persons_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.persons_seq', 28, false);


--
-- Data for Name: ranks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ranks (rankid, name) FROM stdin;
\.
COPY public.ranks (rankid, name) FROM '$$PATH$$/2432.dat';

--
-- Data for Name: reservedcallers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservedcallers (reservedid, reservedcallerid) FROM stdin;
\.
COPY public.reservedcallers (reservedid, reservedcallerid) FROM '$$PATH$$/2452.dat';

--
-- Name: reservedcallers_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reservedcallers_seq', 4, false);


--
-- Data for Name: sectors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sectors (sectorid, ahwalid, shortname, callerprefix, disabled) FROM stdin;
\.
COPY public.sectors (sectorid, ahwalid, shortname, callerprefix, disabled) FROM '$$PATH$$/2426.dat';

--
-- Data for Name: shifts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shifts (shiftid, name, startinghour, numberofhours) FROM stdin;
\.
COPY public.shifts (shiftid, name, startinghour, numberofhours) FROM '$$PATH$$/2433.dat';

--
-- Name: shifts_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shifts_seq', 4, false);


--
-- Data for Name: sysdiagrams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sysdiagrams (name, principal_id, diagram_id, version, definition) FROM stdin;
\.
COPY public.sysdiagrams (name, principal_id, diagram_id, version, definition) FROM '$$PATH$$/2453.dat';

--
-- Name: sysdiagrams_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sysdiagrams_seq', 2, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (userid, username, name, password, salt, failedlogins, lastsuccesslogin, lastfailedlogin, lastipaddress, accountlocked, layout_ahwalmapping, layout_groups_ahawalmapping, layout_opslive, layout_groups_opslivegrid) FROM stdin;
\.
COPY public.users (userid, username, name, password, salt, failedlogins, lastsuccesslogin, lastfailedlogin, lastipaddress, accountlocked, layout_ahwalmapping, layout_groups_ahawalmapping, layout_opslive, layout_groups_opslivegrid) FROM '$$PATH$$/2437.dat';

--
-- Name: users_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_seq', 9, false);


--
-- Data for Name: usersroles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usersroles (userroleid, name) FROM stdin;
\.
COPY public.usersroles (userroleid, name) FROM '$$PATH$$/2454.dat';

--
-- Data for Name: usersrolesmap; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usersrolesmap (userid, ahwalid, userroleid) FROM stdin;
\.
COPY public.usersrolesmap (userid, ahwalid, userroleid) FROM '$$PATH$$/2455.dat';

--
-- Name: sysdiagrams pk__sysdiagr__c2b05b618ed7f4a5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sysdiagrams
    ADD CONSTRAINT pk__sysdiagr__c2b05b618ed7f4a5 PRIMARY KEY (diagram_id);


--
-- Name: ahwal pk_ahwal; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwal
    ADD CONSTRAINT pk_ahwal PRIMARY KEY (ahwalid);


--
-- Name: ahwalmapping pk_ahwalmapping; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT pk_ahwalmapping PRIMARY KEY (ahwalmappingid);


--
-- Name: checkinoutstates pk_checkinoutstates; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checkinoutstates
    ADD CONSTRAINT pk_checkinoutstates PRIMARY KEY (checkinoutstateid);


--
-- Name: citygroups pk_citygroups; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citygroups
    ADD CONSTRAINT pk_citygroups PRIMARY KEY (citygroupid);


--
-- Name: handhelds pk_handhelds; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handhelds
    ADD CONSTRAINT pk_handhelds PRIMARY KEY (handheldid);


--
-- Name: handheldscheckinout pk_handheldscheckinout; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT pk_handheldscheckinout PRIMARY KEY (handheldcheckinoutid);


--
-- Name: incidentscomments pk_incidentcomments; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentscomments
    ADD CONSTRAINT pk_incidentcomments PRIMARY KEY (incidentcommentid);


--
-- Name: incidents pk_incidents; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT pk_incidents PRIMARY KEY (incidentid);


--
-- Name: incidentsources pk_incidentsources; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentsources
    ADD CONSTRAINT pk_incidentsources PRIMARY KEY (incidentsourceid);


--
-- Name: incidentstates pk_incidentstates; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentstates
    ADD CONSTRAINT pk_incidentstates PRIMARY KEY (incidentstateid);


--
-- Name: incidentsview pk_incidentsview; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentsview
    ADD CONSTRAINT pk_incidentsview PRIMARY KEY (incidentid, userid);


--
-- Name: incidentstypes pk_incidenttypes; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentstypes
    ADD CONSTRAINT pk_incidenttypes PRIMARY KEY (incidenttypeid);


--
-- Name: livecallers pk_livecallers; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.livecallers
    ADD CONSTRAINT pk_livecallers PRIMARY KEY (livecallerid);


--
-- Name: livecallersunknown pk_livecallerunknown; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.livecallersunknown
    ADD CONSTRAINT pk_livecallerunknown PRIMARY KEY (livecallerunknownid);


--
-- Name: operationlogs pk_operationlogs; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT pk_operationlogs PRIMARY KEY (logid);


--
-- Name: operations pk_operations; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operations
    ADD CONSTRAINT pk_operations PRIMARY KEY (opeartionid);


--
-- Name: operationsstatus pk_operationsstatus; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operationsstatus
    ADD CONSTRAINT pk_operationsstatus PRIMARY KEY (statusid);


--
-- Name: patrolcars pk_patrolcars; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolcars
    ADD CONSTRAINT pk_patrolcars PRIMARY KEY (patrolid);


--
-- Name: patrolcheckinout pk_patrolcheckinout; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT pk_patrolcheckinout PRIMARY KEY (patrolcheckinoutid);


--
-- Name: patrolpersonstatelog pk_patrolpersonstatelog; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT pk_patrolpersonstatelog PRIMARY KEY (patrolpersonstatelogid);


--
-- Name: patrolpersonstates pk_patrolpersonstates; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolpersonstates
    ADD CONSTRAINT pk_patrolpersonstates PRIMARY KEY (patrolpersonstateid);


--
-- Name: patrolroles pk_patrolroles; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolroles
    ADD CONSTRAINT pk_patrolroles PRIMARY KEY (patrolroleid);


--
-- Name: persons pk_persons_1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT pk_persons_1 PRIMARY KEY (personid);


--
-- Name: ranks pk_ranks; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ranks
    ADD CONSTRAINT pk_ranks PRIMARY KEY (rankid);


--
-- Name: reservedcallers pk_reservedcallers; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservedcallers
    ADD CONSTRAINT pk_reservedcallers PRIMARY KEY (reservedid);


--
-- Name: sectors pk_sectors; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sectors
    ADD CONSTRAINT pk_sectors PRIMARY KEY (sectorid);


--
-- Name: shifts pk_shifts; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shifts
    ADD CONSTRAINT pk_shifts PRIMARY KEY (shiftid);


--
-- Name: usersroles pk_userroles; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usersroles
    ADD CONSTRAINT pk_userroles PRIMARY KEY (userroleid);


--
-- Name: users pk_users; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_users PRIMARY KEY (userid);


--
-- Name: usersrolesmap pk_usersrolesmap; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT pk_usersrolesmap PRIMARY KEY (userid, ahwalid, userroleid);


--
-- Name: uk_principal_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX uk_principal_name ON public.sysdiagrams USING btree (principal_id, name);


--
-- Name: ahwalmapping fk_ahwalmapping_citygroups; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_citygroups FOREIGN KEY (citygroupid) REFERENCES public.citygroups(citygroupid);


--
-- Name: ahwalmapping fk_ahwalmapping_handhelds; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_handhelds FOREIGN KEY (handheldid) REFERENCES public.handhelds(handheldid);


--
-- Name: ahwalmapping fk_ahwalmapping_incidents; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_incidents FOREIGN KEY (incidentid) REFERENCES public.incidents(incidentid);


--
-- Name: ahwalmapping fk_ahwalmapping_patrolcars; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_patrolcars FOREIGN KEY (patrolid) REFERENCES public.patrolcars(patrolid);


--
-- Name: ahwalmapping fk_ahwalmapping_patrolpersonstates; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_patrolpersonstates FOREIGN KEY (patrolpersonstateid) REFERENCES public.patrolpersonstates(patrolpersonstateid);


--
-- Name: ahwalmapping fk_ahwalmapping_patrolroles; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_patrolroles FOREIGN KEY (patrolroleid) REFERENCES public.patrolroles(patrolroleid);


--
-- Name: ahwalmapping fk_ahwalmapping_persons; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);


--
-- Name: ahwalmapping fk_ahwalmapping_sectors; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_sectors FOREIGN KEY (sectorid) REFERENCES public.sectors(sectorid);


--
-- Name: ahwalmapping fk_ahwalmapping_shifts; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ahwalmapping
    ADD CONSTRAINT fk_ahwalmapping_shifts FOREIGN KEY (shiftid) REFERENCES public.shifts(shiftid);


--
-- Name: citygroups fk_citygroups_ahwal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citygroups
    ADD CONSTRAINT fk_citygroups_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);


--
-- Name: citygroups fk_citygroups_sectors; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citygroups
    ADD CONSTRAINT fk_citygroups_sectors FOREIGN KEY (sectorid) REFERENCES public.sectors(sectorid);


--
-- Name: handhelds fk_handhelds_ahwal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handhelds
    ADD CONSTRAINT fk_handhelds_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);


--
-- Name: handheldscheckinout fk_handheldscheckinout_checkinoutstates; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT fk_handheldscheckinout_checkinoutstates FOREIGN KEY (checkinoutstateid) REFERENCES public.checkinoutstates(checkinoutstateid);


--
-- Name: handheldscheckinout fk_handheldscheckinout_handhelds; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT fk_handheldscheckinout_handhelds FOREIGN KEY (handheldid) REFERENCES public.handhelds(handheldid);


--
-- Name: handheldscheckinout fk_handheldscheckinout_persons; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.handheldscheckinout
    ADD CONSTRAINT fk_handheldscheckinout_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);


--
-- Name: incidents fk_incidents_incidentsources; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_incidentsources FOREIGN KEY (incidentsourceid) REFERENCES public.incidentsources(incidentsourceid);


--
-- Name: incidents fk_incidents_incidentstates; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_incidentstates FOREIGN KEY (incidentstateid) REFERENCES public.incidentstates(incidentstateid);


--
-- Name: incidents fk_incidents_incidentstypes; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_incidentstypes FOREIGN KEY (incidenttypeid) REFERENCES public.incidentstypes(incidenttypeid);


--
-- Name: incidents fk_incidents_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT fk_incidents_users FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: incidentscomments fk_incidentscomments_incidents; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentscomments
    ADD CONSTRAINT fk_incidentscomments_incidents FOREIGN KEY (incidentid) REFERENCES public.incidents(incidentid);


--
-- Name: incidentscomments fk_incidentscomments_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentscomments
    ADD CONSTRAINT fk_incidentscomments_users FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: incidentsview fk_incidentsview_incidents; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentsview
    ADD CONSTRAINT fk_incidentsview_incidents FOREIGN KEY (incidentid) REFERENCES public.incidents(incidentid);


--
-- Name: incidentsview fk_incidentsview_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.incidentsview
    ADD CONSTRAINT fk_incidentsview_users FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: livecallers fk_livecallers_handhelds; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.livecallers
    ADD CONSTRAINT fk_livecallers_handhelds FOREIGN KEY (handheldid) REFERENCES public.handhelds(handheldid);


--
-- Name: operationlogs fk_operationlogs_operations; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT fk_operationlogs_operations FOREIGN KEY (operationid) REFERENCES public.operations(opeartionid);


--
-- Name: operationlogs fk_operationlogs_operationsstatus; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT fk_operationlogs_operationsstatus FOREIGN KEY (statusid) REFERENCES public.operationsstatus(statusid);


--
-- Name: operationlogs fk_operationlogs_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operationlogs
    ADD CONSTRAINT fk_operationlogs_users FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: patrolcars fk_patrolcars_ahwal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolcars
    ADD CONSTRAINT fk_patrolcars_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);


--
-- Name: patrolcheckinout fk_patrolcheckinout_checkinoutstates; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT fk_patrolcheckinout_checkinoutstates FOREIGN KEY (checkinoutstateid) REFERENCES public.checkinoutstates(checkinoutstateid);


--
-- Name: patrolcheckinout fk_patrolcheckinout_patrolcars; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT fk_patrolcheckinout_patrolcars FOREIGN KEY (patrolid) REFERENCES public.patrolcars(patrolid);


--
-- Name: patrolcheckinout fk_patrolcheckinout_persons; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolcheckinout
    ADD CONSTRAINT fk_patrolcheckinout_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);


--
-- Name: patrolpersonstatelog fk_patrolpersonstatelog_patrolpersonstates; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT fk_patrolpersonstatelog_patrolpersonstates FOREIGN KEY (patrolpersonstateid) REFERENCES public.patrolpersonstates(patrolpersonstateid);


--
-- Name: patrolpersonstatelog fk_patrolpersonstatelog_persons; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT fk_patrolpersonstatelog_persons FOREIGN KEY (personid) REFERENCES public.persons(personid);


--
-- Name: patrolpersonstatelog fk_patrolpersonstatelog_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patrolpersonstatelog
    ADD CONSTRAINT fk_patrolpersonstatelog_users FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: persons fk_persons_ahwal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT fk_persons_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);


--
-- Name: persons fk_persons_ranks; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.persons
    ADD CONSTRAINT fk_persons_ranks FOREIGN KEY (rankid) REFERENCES public.ranks(rankid);


--
-- Name: sectors fk_sectors_ahwal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sectors
    ADD CONSTRAINT fk_sectors_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);


--
-- Name: usersrolesmap fk_usersrolesmap_ahwal; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT fk_usersrolesmap_ahwal FOREIGN KEY (ahwalid) REFERENCES public.ahwal(ahwalid);


--
-- Name: usersrolesmap fk_usersrolesmap_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT fk_usersrolesmap_users FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: usersrolesmap fk_usersrolesmap_usersroles; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usersrolesmap
    ADD CONSTRAINT fk_usersrolesmap_usersroles FOREIGN KEY (userroleid) REFERENCES public.usersroles(userroleid);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   