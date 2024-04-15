"use client";

import React, { ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

export default function DropdownComponent({
  items,
  title,
}: {
  title: string;
  items: MenuProps["items"];
}) {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <p className="text-lg text-black hover:text-blue-400 font-medium">
            {title}
          </p>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
