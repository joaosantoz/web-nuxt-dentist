export const useGalleryLoader = (): GalleryLoaderComposable => {
  const mediaListInjected = inject<MediaInfo[]>(PROVIDER_KEY.MEDIA_LIST, []);
  const baseList = ref<MediaInfo[]>(mediaListInjected);

  const previewList = (): MediaInfo[] => {
    return baseList.value.slice(0, GRID_SIZE);
  };

  const mediaToShow = ref<MediaInfo[]>([...previewList()]);

  const filteredGalleryList = computed<MediaInfo[]>(() => {
    return mediaToShow.value;
  });

  const showLoadMoreButton = computed<boolean>(() => {
    if (filteredGalleryList.value.length < GRID_SIZE) return false;

    return filteredGalleryList.value.length / GRID_SIZE <= 1;
  });

  const filterMediaList = (mediaFilters: MEDIA_TYPE[]): void => {
    if (!showLoadMoreButton.value) {
      mediaToShow.value = [...baseList.value.filter((media) => mediaFilters.includes(media.mediaType))];
    }
    mediaToShow.value = [...baseList.value.filter((media) => mediaFilters.includes(media.mediaType)).slice(0, GRID_SIZE)];
  };

  const loadMoreMedia = (mediaFilters: MEDIA_TYPE[]): void => {
    const newMediaValues = [...baseList.value.filter((listItem) => mediaFilters.includes(listItem.mediaType))];

    const filteredNewValues = newMediaValues.slice(filteredGalleryList.value.length, newMediaValues.length + GRID_SIZE);

    mediaToShow.value = [...filteredGalleryList.value, ...filteredNewValues];
  };

  return {
    showLoadMoreButton,
    loadMoreMedia,
    filterMediaList,
    filteredGalleryList
  };
};

export type GalleryLoaderComposable = {
  showLoadMoreButton: ComputedRef<boolean>;
  loadMoreMedia: (mediaFilters: MEDIA_TYPE[]) => void;
  filterMediaList: (mediaFilters: MEDIA_TYPE[]) => void;
  filteredGalleryList: ComputedRef<MediaInfo[]>;
};
