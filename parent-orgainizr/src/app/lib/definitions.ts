interface IWatch {
    id: number;
    task: number;
    parent: number;
    watchDate: Date;
    startTime: String;
    endTime: String;
    dateCreated: Date;
    dateUpdated: Date;
}

interface IParent {
    id: number;
    firstName: string;
    lastName: string;
    classId: number;
    birthDate: Date;
    dateCreated: Date;
    dateUpdated: Date;
}

interface IPupil {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateCreated: Date;
    dateUpdated: Date;
}

interface ILocation {
    id: number;
    locationName: string;
    place: string;
    building: string;
    roomNr: string;
    description: string;
    dateCreated: Date;
    dateUpdated: Date;
}
interface ITask {
    id: number;
    taskName:string;
    leader: number;
    location: number;
    description: string;
    dateCreated: Date;
    dateUpdated: Date;
}

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
