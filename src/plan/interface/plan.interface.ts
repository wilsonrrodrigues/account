export class Plan{
    name: string; //basico, enterprise || mensal /anual || 1-5 2-10 3-100
    setting: {key: string; value: string};
    resource: string[];
}