
CREATE TABLE Devices(
	ID integer NULL,
	AhwalID integer NULL,
	OrgID integer NULL,
	DeviceNumber nchar(50) NULL,
	Model nchar(50) NULL,
	Type nchar(50) NULL,
	Defective integer  NULL,
	Rental integer NULL,
	BarCode nchar(50) NULL
) ;

alter table Devices RENAME COLUMN ID TO DeviceID;

DROP TABLE DevicesCheckInOut
CREATE TABLE DevicesCheckInOut(
DeviceCheckInOutID integer NULL,
CheckInOutStateID integer NULL,
DeviceID integer NULL,
PersonID integer NULL,
OrgID integer NULL,
SavedTime TimeStamp); 


CREATE TABLE Persons(
	PersonID integer  NULL,
	AhwalID integer NOT NULL,
	MilNumber integer NOT NULL,
	RankID int NOT NULL,
	Name nchar(500) NULL,
	Mobile nchar(50) NULL,
	FixedCallerID nchar(50) NULL,
	OrgID integer NULL
);

insert into Persons values (4,3,'51667',10,'Test4','11111','',1);

insert into DevicesCheckInOut values (20,10,4,3,1,CURRENT_TIMESTAMP);

insert into DevicesCheckInOut values (21,10,5,4,1,CURRENT_TIMESTAMP);

select * from devices
select * from Persons
delete from devices;
insert into Devices values (1,1,'1234','2011',0,0,'PAT123456',1);
insert into Devices values (4,2,'23545','2012',0,0,'PAT23545',1);

insert into Devices values (2,1,'456','',0,0,'HAND456',2);
insert into Devices values (5,3,'888','',0,0,'HAND888',2);

insert into Devices values (3,1,'789','',0,0,'ACC789',3);



insert into Devices values (6,1,'666','',0,0,'PAT666',3);

insert into devicetypes values (1,'PATROL','PAT');
insert into devicetypes values (2,'HANDHELD','HAN');
insert into devicetypes values (3,'ACCESSORY','ACC');
select 
delete devices  where deviceid=0
commit;
update Devices set devicenumber = '123456';
insert into CheckInOutStates values ('10','استلام');
insert into Ahwal values ('2','شمال');
insert into Ahwal values ('3','غرب');
insert into Ranks values ('1','عميد');

ALTER TABLE Devices 
    alter COLUMN DeviceID  SET IDENTITY;

CREATE TABLE CheckInOutStates(
	CheckInOutStateID integer NOT NULL,
	Name nchar(500) NOT NULL)


CREATE TABLE Ahwal(
	AhwalID integer  NULL,
	Name nchar(500) NULL);


CREATE TABLE Ranks(
	RankID int NOT NULL,
	Name nchar(50) NOT NULL);


SELECT        DeviceCheckInOutID, CheckInOutStates.Name AS StateName, Ahwal.AhwalID, Ahwal.Name AS AhwalName, Devices.DeviceNumber, Devices.Model, Devices.Type, Persons.MilNumber, 
                         Ranks.Name AS PersonRank, Persons.Name AS PersonName, DevicesCheckInOut.SavedTime, CheckInOutStates.CheckInOutStateID
FROM            Ahwal INNER JOIN
                         Devices  ON Ahwal.AhwalID = Devices .AhwalID INNER JOIN
                         DevicesCheckInOut ON Devices.DeviceID = DevicesCheckInOut.DeviceID INNER JOIN
                         CheckInOutStates ON DevicesCheckInOut.CheckInOutStateID = CheckInOutStates.CheckInOutStateID INNER JOIN
                         Persons ON Ahwal.AhwalID = Persons.AhwalID AND DevicesCheckInOut.PersonID = Persons.PersonID INNER JOIN
                         Ranks ON Persons.RankID = Ranks.RankID
    
ORDER BY DevicesCheckInOut.SavedTime

select 

select * from DevicesCheckInOut
select * from Devices

update AhwalMapping set CallerID='101' where CallerID='300'
DROP table AhwalMapping
CREATE TABLE AhwalMapping(
	AhwalMappingID int NOT NULL,
	AhwalID int NOT NULL,
	ShiftID int NOT NULL,
	SectorID int NOT NULL,
	DeviceRoleID int NOT NULL,
	CityGroupID int NOT NULL,
	PersonID int NOT NULL,
	HasFixedCallerID int NOT NULL,
	CallerID nchar(50) NULL,
	HasDevices int NOT NULL,
	DeviceID int NULL,
	DevicePersonStateID int NULL,
	LastStateChangeTimeStamp timestamp NULL,
	SunRiseTimeStamp timestamp NULL,
	SunSetTimeStamp timestamp NULL,
	LastLandTimeStamp timestamp NULL,
	LastSeaTimeStamp timestamp NULL,
	LastAwayTimeStamp timestamp NULL,
	LastComeBackTimeStamp timestamp NULL,
	IncidentID int NULL,
	AssocitatePersonID int NULL,
	SortingIndex int NOT NULL
	);

insert into AhwalMapping values(3,2,1,1,1,1,3,0,300,1,2,10,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,null,3,1);


SELECT AhwalMappingID, AhwalID, ShiftID, SectorID, DeviceRoleID, CityGroupID,(Select MilNumber From Persons where PersonID=AhwalMapping.PersonID) as MilNumber,
(Select (select Name from Ranks where rankid = persons.rankid) From Persons where PersonID=AhwalMapping.PersonID) as RankDesc,
(Select ShortName From sectors where SectorID=AhwalMapping.SectorID) as SectorDesc,
(Select RankID From Persons where PersonID=AhwalMapping.PersonID) as RankID, (Select Name From Persons where PersonID=AhwalMapping.PersonID) as PersonName, CallerID, 
HasDevices, '' as Serial,  (Select DeviceNumber From Devices where DeviceID=AhwalMapping.DeviceID) as DeviceNumber, 
DevicePersonStateID, SunRiseTimeStamp, SunSetTimeStamp, SortingIndex,(Select Mobile From Persons where PersonID=AhwalMapping.PersonID) as PersonMobile,IncidentID,
LastStateChangeTimeStamp FROM AhwalMapping 

select * from ranks
CREATE TABLE Sectors(
	SectorID int NOT NULL,
	AhwalID int NULL,
	ShortName nchar(500) NOT NULL,
	CallerPrefix nchar(2) NULL,
	Disabled int NOT NULL
	);
insert into sectors values(1,1,'عام',null,0);
insert into sectors values(2,1,'القطاع الأول',1,0);