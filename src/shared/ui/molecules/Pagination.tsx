import React from 'react';
import { Button } from '../atoms/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hasNext,
  hasPrev,
}: PaginationProps) {
  // 페이지 번호 버튼 생성 (현재 페이지 주변 5개 표시)
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(0, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages - 1, start + maxVisible - 1);

    // start 조정 (end가 마지막에 가까울 때)
    if (end - start < maxVisible - 1) {
      start = Math.max(0, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Previous 버튼 */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev}
      >
        이전
      </Button>

      {/* 첫 페이지 */}
      {pageNumbers[0] > 0 && (
        <>
          <button
            onClick={() => onPageChange(0)}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-white/10 text-zinc-400 transition-colors"
          >
            1
          </button>
          {pageNumbers[0] > 1 && <span className="text-zinc-600">...</span>}
        </>
      )}

      {/* 페이지 번호 버튼 */}
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
            currentPage === pageNum
              ? 'bg-yellow-400 text-black font-semibold'
              : 'hover:bg-white/10 text-zinc-400'
          }`}
        >
          {pageNum + 1}
        </button>
      ))}

      {/* 마지막 페이지 */}
      {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 2 && (
            <span className="text-zinc-600">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages - 1)}
            className="px-3 py-1.5 text-sm rounded-lg hover:bg-white/10 text-zinc-400 transition-colors"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next 버튼 */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        다음
      </Button>
    </div>
  );
}
