import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'TÀI LIỆU MÔN HỌC CẤU TRÚC DỮ LIỆU',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mình sẽ cố gắng cập nhật đầy đủ nhất về tài liệu của môn học này.
      </>
    ),
  },
  {
    title: 'Độ phức tạp của giải thuật',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hiểu được cách tính độ phức tạp của giải thuật cũng như cách để tối ưu thuật toán.
      </>
    ),
  },
  {
    title: 'Các kiểu dữ liệu trừu trượng cơ bản',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tìm hiểu các kiểu dữ liệu trừu tượng cơ bản thường gặp.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
