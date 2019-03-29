# tellsell: Access authorization with OpenID Connect & Azure AD

> WIP

This is a sequenced walkthrough, showing you how to implement access authorization in your web application using Azure Active Directory and OpenID Connect. This compliments the [official Azure documentation on this subject](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-openid-connect-code#send-the-sign-in-request) and will ask you to refer there from time to time for the theory part of this walkthrough.

## Register your application with your AD tenant

The root of this possibility (of using Azure AD for authorization) lies with your Active Directory tenant. An AD [tenant](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis#terminology) comes with your subscription.

## Getting the app running

First, clone the app and run it locally:

```
$ git clone https://github.com/vitoc/tellsell.git
$ cd tellsell
$ npm install
$ node index.js
```

## Register your application with your AD tenant

With the application running, follow the first section here:

https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-openid-connect-code#send-the-sign-in-request

For the Redirect URI, use this (presuming that's the port that you see as per previous step):

```
http://localhost:8080
```

Populate the ```Application ID``` from th

## Access panel Link

https://account.activedirectory.windowsazure.com/r#/applications

## References

https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-openid-connect-code#register-your-application-with-your-ad-tenant
https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/what-is-single-sign-on
https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/methods-for-assigning-users-and-groups
