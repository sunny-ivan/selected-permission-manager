export const clientId = String(process.env.REACT_APP_CLIENT_ID);
export const tenantId = String(process.env.REACT_APP_TENANT_ID);
export const scopes: string[] = ["User.Read", "Files.ReadWrite"];
export const redirectUri = String(process.env.REACT_APP_REDIRECT_URI);
export const appName = String("selected-permission-manager");
export const appdataDirectory = String("selected-permission-manager");
export const storagePrefix = String("spm-");
