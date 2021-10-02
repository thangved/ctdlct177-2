import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Cập nhật đầy đủ?',
		Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				Mình sẽ cố gắng cập nhật đầy đủ nhất về tài liệu của môn học
				này.
			</>
		),
	},
	{
		title: 'Giao diện thân thiện',
		Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				Giao diện trang web được xây dựng trên thư viện{' '}
				<b>docusaurus</b> với kiểu triển khai bằng <b>SPA</b> đảm bảo
				tốt cho trải nghiệm người dùng.
			</>
		),
	},
	{
		title: 'Hoàn toàn miễn phí!',
		Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Đây là dự án mình thực hiện trong quá trình học nên sẽ hoàn toàn
				miễn phí.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
