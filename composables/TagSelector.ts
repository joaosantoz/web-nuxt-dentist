import { TAG_MEDIA } from '~/enums/TagMedia.enum';

export const useTagSelector = (): TagSelectorComposable => {
  const mediaList = inject<MediaInfo[]>(PROVIDER_KEY.MEDIA_LIST, []);

  const mediaAllCount = computed<number>(() => mediaList.length);
  const mediaPhotosCount = computed<number>(() => mediaList.filter((media) => media.mediaType === MEDIA_TYPE.IMAGE).length);
  const mediaVideosCount = computed<number>(() => mediaList.filter((media) => media.mediaType === MEDIA_TYPE.VIDEO).length);

  const activeTag = ref<TAG_MEDIA>(TAG_MEDIA.ALL);

  const setActiveTag = (newTag: TAG_MEDIA): void => {
    activeTag.value = newTag;
  };

  const tagData = computed<{ title: TAG_MEDIA; mediaType: MEDIA_TYPE[]; count: number }[]>(() => {
    return [
      {
        title: TAG_MEDIA.ALL,
        mediaType: [MEDIA_TYPE.IMAGE, MEDIA_TYPE.VIDEO],
        count: mediaAllCount.value
      },
      {
        title: TAG_MEDIA.PHOTOS,
        mediaType: [MEDIA_TYPE.IMAGE],
        count: mediaPhotosCount.value
      },
      {
        title: TAG_MEDIA.VIDEOS,
        mediaType: [MEDIA_TYPE.VIDEO],
        count: mediaVideosCount.value
      }
    ];
  });

  const activeMediaType = computed<MEDIA_TYPE[]>(() => {
    return tagData.value.find((tag) => tag.title === activeTag.value)!.mediaType;
  });

  return {
    tagData,
    activeTag,
    setActiveTag,
    activeMediaType
  };
};

export type TagSelectorComposable = {
  activeTag: Ref<TAG_MEDIA>;
  setActiveTag: (tag: TAG_MEDIA) => void;
  activeMediaType: ComputedRef<MEDIA_TYPE[]>;
  tagData: ComputedRef<{ title: TAG_MEDIA; mediaType: MEDIA_TYPE[]; count: number }[]>;
};
