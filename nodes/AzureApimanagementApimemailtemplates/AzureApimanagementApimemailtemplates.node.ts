import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimemailtemplates implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimemailtemplates',
                name: 'N8nDevAzureApimanagementApimemailtemplates',
                icon: { light: 'file:./azure-apimanagement-apimemailtemplates.png', dark: 'file:./azure-apimanagement-apimemailtemplates.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Azure API Management Email Templates.',
                defaults: { name: 'Azure Apimanagement Apimemailtemplates' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimemailtemplatesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
