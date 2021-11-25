/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import type {Props} from '@theme/DocCategoryGeneratedIndexPage';
import DocCardList from '@theme/DocCardList';
import {useCategoryGeneratedIndexSidebarItem} from '@docusaurus/theme-common';
import DocPaginator from '@theme/DocPaginator';

import styles from './styles.module.css';
import Seo from '@theme/Seo';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import {MainHeading} from '@theme/Heading';

export default function DocCategoryGeneratedIndexPage({
  categoryGeneratedIndex,
}: Props): JSX.Element {
  const category = useCategoryGeneratedIndexSidebarItem(categoryGeneratedIndex);
  return (
    <>
      <Seo
        title={categoryGeneratedIndex.title}
        description={categoryGeneratedIndex.description}
      />
      <div className={styles.generatedIndexPage}>
        <DocVersionBanner />
        <DocVersionBadge />
        <header>
          <MainHeading className={styles.title}>
            {categoryGeneratedIndex.title}
          </MainHeading>
          {categoryGeneratedIndex.description && (
            <p>{categoryGeneratedIndex.description}</p>
          )}
        </header>
        <main className="margin-top--lg">
          <DocCardList items={category.items} />
        </main>
        <footer className="margin-top--lg">
          <DocPaginator
            previous={categoryGeneratedIndex.navigation.previous}
            next={categoryGeneratedIndex.navigation.next}
          />
        </footer>
      </div>
    </>
  );
}
