<template>
  <sections-profile-details
    :dentist-name="name"
    :image-path="picture"
    :dentist-role="role"
    :dentist-specialty="specialty" />
  <sections-profile-description :profile-description="description" />
  <sections-profile-gallery />
</template>

<script lang="ts" setup>
import { PROVIDER_KEY } from '~/enums/ProviderKey';

const route = useRoute();

const dentistProfileId = computed<string>(() => route.params.id.toString());
const dentistEndpoint = computed<string>(() => DEV_URLS.get(PLATFORM_CATEGORY.API)!.concat(dentistProfileId.value));

const { data: response, error } = await useFetch<DentistApiReponse, DentistApiError>(dentistEndpoint.value, {
  cache: 'force-cache'
});

if (!response.value) {
  handleDentistNotFoundError(error.value as NonNullable<DentistApiError>);
}

const { name, picture, role, specialty, description, medias } = response.value!.dentist as DentistProfile;

const profileImage = computed<string>(() => DEV_URLS.get(PLATFORM_CATEGORY.APP)!.concat(picture));
const dentistTitle = computed<string>(() => `${role} ${name}`);

provide<MediaInfo[]>(PROVIDER_KEY.MEDIA_LIST, medias);
provide<ComputedRef<string>>(PROVIDER_KEY.PROFILE_TITLE, dentistTitle);
provide<ComputedRef<string>>(PROVIDER_KEY.PROFILE_PHOTO, profileImage);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
