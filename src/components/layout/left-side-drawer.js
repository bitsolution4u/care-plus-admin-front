'use client';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import useSidebar from './sidebar/useSidebar';

export default function LeftSideBar({
  open,
  activeModule,
  activeSubModule,
  handleActiveModule,
  handleActiveSubModule,
}) {
  const { sidebarItems } = useSidebar();

  return (
    <>
      <Divider />
      <List sx={{ marginTop: 2 }}>
        {sidebarItems.map((listItem, i) => (
          <ListItem key={i} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => handleActiveModule(listItem.module)}
              className="top-button"
              sx={{
                background: `${
                  activeModule.includes(listItem.module) ? '#212929a6 ' : ''
                }`,
                color: `${
                  activeModule.includes(listItem.module) ? '#fff' : '#959595'
                }`,
              }}
            >
              <ListItemIcon
                className="btn-icon"
                sx={{
                  minWidth: `${open ? '30px' : '56px'}`,
                  color: `${
                    activeModule.includes(listItem.module) ? '#fff' : '#959595'
                  }`,
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={listItem.module} />
              {listItem.subModule.length > 0 && (
                <>
                  {activeModule.includes(listItem.module) ? (
                    <ExpandMore />
                  ) : (
                    <ExpandLess sx={{ transform: 'rotate(90deg)' }} />
                  )}
                </>
              )}
            </ListItemButton>
            {listItem.subModule.length > 0 &&
              listItem.subModule.map((item, j) => (
                <Collapse
                  key={j}
                  in={activeModule.includes(listItem.module)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton
                      onClick={() => handleActiveSubModule(item.subModuleName)}
                      sx={{
                        padding: '0.2em 0em 0.2em 0.5em',
                        margin: '0.3em 0.5em 0.3em 1em',
                        borderRadius: '5px',
                        pl: 1,
                        background: `${
                          activeSubModule.includes(item.subModuleName)
                            ? '#1b2323'
                            : ''
                        }`,
                        color: `${
                          activeSubModule.includes(item.subModuleName)
                            ? '#fff'
                            : '#959595'
                        }`,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: `${open ? '30px' : '56px'}`,
                          color: `${
                            activeSubModule.includes(item.subModuleName)
                              ? '#fff'
                              : '#959595'
                          }`,
                        }}
                      >
                        <StarBorder
                          sx={{
                            color: `${
                              activeSubModule.includes(item.subModuleName)
                                ? '#fff'
                                : '#959595'
                            }`,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item.subModuleName} />
                      {item.innerSubModule.length > 0 && (
                        <>
                          {activeSubModule.includes(item.subModuleName) ? (
                            <ExpandMore />
                          ) : (
                            <ExpandLess sx={{ transform: 'rotate(90deg)' }} />
                          )}
                        </>
                      )}
                    </ListItemButton>
                    {item.innerSubModule &&
                      item.innerSubModule.map((innerItem, k) => (
                        <Collapse
                          key={k}
                          in={activeSubModule.includes(item.subModuleName)}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List
                            component="div"
                            disablePadding
                            sx={{ color: '#959595' }}
                          >
                            <ListItemButton sx={{ pl: 5 }}>
                              <ListItemIcon
                                sx={{ minWidth: `${open ? '30px' : '56px'}` }}
                              >
                                <InboxIcon sx={{ color: '#959595' }} />
                              </ListItemIcon>
                              <ListItemText primary={innerItem.innerName} />
                            </ListItemButton>
                          </List>
                        </Collapse>
                      ))}
                  </List>
                </Collapse>
              ))}
          </ListItem>
        ))}
      </List>
    </>
  );
}
