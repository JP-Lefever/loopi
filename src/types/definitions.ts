


export type ServicesProps = {
    id: number;
    name: string;
    image: string;
    description: string;
}

export type ProjectProps = {
    id: number;
    name: string;
    image: string;
    type: string;
    synopsis: string;
    web: string;
}

export type CostServicesProps = {
    id: number;
    name: string;
    price: string;
    scope: string;
    responsive: string;
    design_ux: string;
    seo: string;
    timeline: string;
    payment?: string;
    api?: string;
}

export type ContactProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export type ResultProps<T> = | {success: true, data : T} | {success: false, error: string};