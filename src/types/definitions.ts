import React from "react";

export type buttonProps = {
    onClick : ()=>void;
    className : string;
    children : React.ReactNode

}

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

export type CostProps = {
    services : CostServicesProps[];
}