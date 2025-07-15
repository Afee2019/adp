/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from 'antd';
import type { CardProps } from 'antd/es/card';
import classNames from 'classnames';
import React from 'react';
import useStyles from './index.style';

type totalType = () => React.ReactNode;

export type ChartCardProps = {
  title: React.ReactNode;
  action?: React.ReactNode;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  footer?: React.ReactNode;
  contentHeight?: number;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
} & CardProps;

const ChartCard: React.FC<ChartCardProps> = (props) => {
  const { styles } = useStyles();
  const renderTotal = (total?: number | totalType | React.ReactNode) => {
    if (!total && total !== 0) {
      return null;
    }
    let totalDom: React.ReactNode | null = null;
    switch (typeof total) {
      case 'undefined':
        totalDom = null;
        break;
      case 'function':
        totalDom = <div className={styles.total}>{total()}</div>;
        break;
      default:
        totalDom = <div className={styles.total}>{total}</div>;
    }
    return totalDom;
  };
  const renderContent = () => {
    const {
      contentHeight,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      loading,
    } = props;
    if (loading) {
      return false;
    }
    return (
      <div className={styles.chartCard}>
        <div
          className={classNames(styles.chartTop, {
            [styles.chartTopMargin]: !children && !footer,
          })}
        >
          <div className={styles.avatar}>{avatar}</div>
          <div className={styles.metaWrap}>
            <div className={styles.meta}>
              <span>{title}</span>
              <span className={styles.action}>{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div
            className={styles.content}
            style={{
              height: contentHeight || 'auto',
            }}
          >
            <div className={contentHeight ? styles.contentFixed : undefined}>
              {children}
            </div>
          </div>
        )}
        {footer && (
          <div
            className={classNames(styles.footer, {
              [styles.footerMargin]: !children,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    );
  };

  // 解构时排除自定义属性，避免传递到 DOM 元素
  const {
    loading = false,
    // biome-ignore lint/correctness/noUnusedVariables: 排除自定义属性
    contentHeight,
    // biome-ignore lint/correctness/noUnusedVariables: 排除自定义属性
    total,
    // biome-ignore lint/correctness/noUnusedVariables: 排除自定义属性
    action,
    // biome-ignore lint/correctness/noUnusedVariables: 排除自定义属性
    avatar,
    // biome-ignore lint/correctness/noUnusedVariables: 排除自定义属性
    footer,
    ...cardProps
  } = props;
  return (
    <Card
      loading={loading}
      styles={{
        body: {
          padding: '20px 24px 8px 24px',
        },
      }}
      {...cardProps}
    >
      {renderContent()}
    </Card>
  );
};
export default ChartCard;
