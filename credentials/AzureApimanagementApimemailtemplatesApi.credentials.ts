import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimemailtemplatesApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimemailtemplatesApi';

        displayName = 'Azure Apimanagement Apimemailtemplates API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimemailtemplates/azure-apimanagement-apimemailtemplates.png', dark: 'file:../nodes/AzureApimanagementApimemailtemplates/azure-apimanagement-apimemailtemplates.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimemailtemplates API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
