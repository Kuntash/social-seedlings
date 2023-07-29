import Head from 'next/head';
import Image from 'next/image';
import styles from '@main/pages/index.module.css';
import { NewsFeedTemplate } from '@main/components/templates/NewsFeedTemplate';

export default function Home() {
  return <NewsFeedTemplate />;
}
