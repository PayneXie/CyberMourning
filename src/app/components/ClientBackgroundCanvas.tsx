'use client';

import dynamic from 'next/dynamic';

// 动态导入BackgroundCanvas组件（客户端渲染）
const BackgroundCanvas = dynamic(
  () => import('./BackgroundCanvas'),
  { ssr: false }
);

interface ClientBackgroundCanvasProps {
  color?: string;
  particleCount?: number;
}

export default function ClientBackgroundCanvas({ 
  color, 
  particleCount 
}: ClientBackgroundCanvasProps) {
  return <BackgroundCanvas color={color} particleCount={particleCount} />;
} 