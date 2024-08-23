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
    mediaToShow.value = [...baseList.value.filter((media) => mediaFilters.includes(media.mediaType))];
  };

  const loadMoreMedia = (mediaFilters: MEDIA_TYPE[]): void => {
    const newMediaValues = [...baseList.value.slice(filteredGalleryList.value.length, mediaToShow.value.length + GRID_SIZE)];
    const filteredNewValues = newMediaValues.filter((listItem) => mediaFilters.includes(listItem.mediaType));

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
