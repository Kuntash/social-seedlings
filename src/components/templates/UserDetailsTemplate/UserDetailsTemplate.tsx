import React, { useState } from 'react';
import styles from '@main/components/templates/UserDetailsTemplate/UserDetailsTemplate.module.css';
import { useRouter } from 'next/router';
import { ProfilePicture } from '@main/components/atoms/ProfilePicture';
import { useUserDetails } from '@main/hooks/reactQuery/useUserDetails';
import { Loader } from '@main/components/atoms/Loader';
import { useUserPhotos } from '@main/hooks/reactQuery/useUserPhotos';
import { PhotosViewToggleState } from './types';
import { PhotosViewToggle } from './components/PhotosViewToggle';
import { FeedItem } from '../NewsFeedTemplate/components/FeedItem';
import { GridPhotoItem } from './components/GridPhotoItem/GridPhotoItem';
import { ErrorBanner } from '@main/components/atoms/ErrorBanner/ErrorBanner';

export const UserDetailsTemplate = () => {
  const router = useRouter();
  const userName = router.query?.userName?.toString() as string;
  const {
    data: userDetails,
    isInitialLoading: isInitialUserDetailsLoading,
    isError: isUserDetailsError
  } = useUserDetails({ userName });

  const {
    data: userPhotos,
    isInitialLoading: areInitialUserPhotosLoading,
    isError: areUserPhotosError,
    fetchNextPage,
    isFetchingNextPage
  } = useUserPhotos({ userName });

  const [photosView, setPhotosView] = useState<PhotosViewToggleState>('grid');

  return (
    <main
      className={styles.user__details__page}
      style={{
        justifyContent:
          isInitialUserDetailsLoading ||
          areInitialUserPhotosLoading ||
          isUserDetailsError ||
          areUserPhotosError
            ? 'center'
            : 'flex-start'
      }}
    >
      {isInitialUserDetailsLoading || areInitialUserPhotosLoading ? (
        <Loader size="large" />
      ) : isUserDetailsError || areUserPhotosError ? (
        <ErrorBanner />
      ) : (
        <div className={styles.user__details__container}>
          {/* Header */}
          <div className={styles.user__details__header}>
            {/* Profile picture */}

            <ProfilePicture size="large" urls={userDetails?.profile_image} />

            <div>
              {/* user's username */}
              <h2 className={styles.username}>{userDetails?.username}</h2>

              {/* user's Stats */}
              <div className={styles.user__stats}>
                <div>
                  <div className={styles.stat__count}>
                    {userDetails?.total_photos}
                  </div>
                  <div className={styles.stat__name}>
                    {userDetails?.total_photos > 1 ? 'photos' : 'photo'}
                  </div>
                </div>
                <div>
                  <div className={styles.stat__count}>
                    {userDetails?.total_likes}
                  </div>
                  <div className={styles.stat__name}>
                    {userDetails?.total_photos > 1 ? 'likes' : 'like'}
                  </div>
                </div>
                <div>
                  <div className={styles.stat__count}>
                    {userDetails?.total_collections}
                  </div>
                  <div className={styles.stat__name}>
                    {userDetails?.total_collections > 1
                      ? 'collections'
                      : 'collection'}
                  </div>
                </div>
              </div>

              {/* user's name */}
              <div className={styles.user__name}>{userDetails?.name}</div>

              {/* user's bio */}
              <div className={styles.user__bio}>{userDetails?.bio}</div>
            </div>
          </div>

          {/* TODO: Tab for photos and statistics */}

          <div
            className={`${styles.user__photos__container} ${
              photosView === 'list' && styles.list
            }`}
          >
            {/* Grid / list toggle  */}

            <PhotosViewToggle
              photosViewState={photosView}
              setPhotosViewState={setPhotosView}
            />
            {/* container */}
            {/* Grid */}
            {photosView === 'grid' && (
              <div className={styles.grid__view__container}>
                {userPhotos?.pages?.map((page) =>
                  page?.map((photo: any) => {
                    const isLastPhoto =
                      photo?.id ===
                      userPhotos?.pages[userPhotos?.pages.length - 1]?.[
                        userPhotos?.pages[userPhotos?.pages.length - 1]
                          ?.length - 1
                      ]?.id;

                    return (
                      <GridPhotoItem
                        key={photo.id}
                        photo={photo}
                        isLastPhoto={isLastPhoto}
                        fetchNextPage={() => {
                          fetchNextPage();
                        }}
                        userName={userName}
                      />
                    );
                  })
                )}
              </div>
            )}
            {/* List */}
            {photosView === 'list' && (
              <ul className={styles.list__view__container}>
                {userPhotos?.pages?.map((page) =>
                  page?.map((photo: any) => {
                    const isLastPhoto =
                      photo?.id ===
                      userPhotos?.pages[userPhotos?.pages.length - 1]?.[
                        userPhotos?.pages[userPhotos?.pages.length - 1]
                          ?.length - 1
                      ]?.id;

                    return (
                      <FeedItem
                        feed={photo}
                        key={photo.id}
                        isLastFeed={isLastPhoto}
                        fetchNextPage={() => {
                          fetchNextPage();
                        }}
                      />
                    );
                  })
                )}
              </ul>
            )}

            {/* Pagination loader */}
            {!isFetchingNextPage && (
              <div className={styles.pagination__loader__container}>
                <Loader size="small" />
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};
