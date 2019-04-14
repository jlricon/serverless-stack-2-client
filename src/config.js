const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-ukqj49p9uvyg"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dvv0bscvab.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_T2GKy5RYO",
    APP_CLIENT_ID: "7c112ej336onrecupi5v4il3vp",
    IDENTITY_POOL_ID: "us-east-1:328800be-8cd8-4677-9aed-e5ac8fab6af4"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-cwosdmdjrqqp"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ea2yy72j0f.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pjbcg1Ctq",
    APP_CLIENT_ID: "15ljo9l1699bio4ij29sq3j4m2",
    IDENTITY_POOL_ID: "us-east-1:133f287e-f60d-4a0e-aaee-4381d2fdef00"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
