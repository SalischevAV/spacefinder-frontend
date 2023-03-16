const spacesUrl = 'https://qyzda2rb8h.execute-api.eu-west-3.amazonaws.com/prod/';

export const config = {
    REGION: 'eu-west-3',
    USER_POOL_ID: 'eu-west-3_guNZ1z8zD',
    APP_CLIENT_ID: '7ebfsbj5ogh8qiopomh6n37j2u',
    IDENTITY_POOL_ID: 'eu-west-3:735bfb53-6962-40fb-8d25-ae952f55d72a',
    SPACES_PHOTOS_BUCKET: 'spaces-photos-02380a0ccf21',
    PROFILE_PHOTOS_BUCKET: 'profile-photos-02380a0ccf21',
    // TEST_USER_NAME: 'olenka2',
    // TEST_USER_PASSWORD: 'Qwe123asD!',
    api: {
        baseUrl: spacesUrl,
        spacesUrl: `${spacesUrl}spaces/`,
        reservationsUrl: `${spacesUrl}reservations/`
    }
}