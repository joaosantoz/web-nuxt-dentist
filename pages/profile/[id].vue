<template>
  <dentist-profile-details
    :dentist-name="name"
    :image-path="picture"
    :dentist-role="role"
    :dentist-specialty="specialty"
  />
  <dentist-profile-description :profile-description="description" />
</template>

<script lang="ts" setup>
const route = useRoute();

const dentistProfileId = computed<string>(() => route.params.id.toString());
const dentistEndpoint = computed<string>(() => DEV_URLS.get(PLATFORM_CATEGORY.API)!.concat(dentistProfileId.value));

const { data: response, error } = await useFetch<DentistApiReponse, DentistApiError>((dentistEndpoint.value), {
  cache: 'force-cache'
});

if (!response.value) {
  handleDentistNotFoundError(error.value as NonNullable<DentistApiError>);
}

const { name, picture, role, specialty, description } = response.value!.dentist as DentistProfile;

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>