import React from "react";
import "../styling/HomePage.css";

function HomePage() {
    return (
      <div class="desktop-dark">
        <div class="tasks-panel">
          <div class="right-panel">
            <div class="drop-shadow"></div>
            <div class="task-filters-mask">
              <div class="task-list"></div>
              <div class="filters">
                <div class="filters-bg"></div>
                <div class="completed-btn">Completed</div>
                <div class="active-btn">Active</div>
                <div class="all-btn">All</div>
              </div>
              <div class="task-list2">
                <div class="task">
                  <div class="task-bg"></div>
                  <div class="category">
                    <div class="bg"></div>
                    <div class="description">To study</div>
                  </div>
                  <div class="description2">
                    Memorize the fifty states and their capitals
                  </div>
                  <div class="check"></div>
                  <svg
                    class="check-completed"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#4CAF50" />
                    <path
                      d="M21.6861 10.3144C22.1046 10.733 22.1046 11.4093 21.6861 11.8279L13.1142 20.3998C12.6956 20.8183 12.0193 20.8183 11.6007 20.3998L7.31381 16.1138C6.8954 15.6953 6.8954 15.0189 7.31381 14.6004C7.7323 14.1818 8.41068 14.1818 8.82923 14.6004L12.3273 18.1262L20.1726 10.3144C20.5912 9.8952 21.2675 9.8952 21.6861 10.3144Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="task2">
                  <div class="task-bg"></div>
                  <div class="category">
                    <div class="bg2"></div>
                    <div class="description">Later</div>
                  </div>
                  <div class="description2">
                    Memorize the fifty states and their capitals
                  </div>
                  <div class="check"></div>
                  <svg
                    class="check-completed2"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#4CAF50" />
                    <path
                      d="M21.6861 10.3144C22.1046 10.733 22.1046 11.4093 21.6861 11.8279L13.1142 20.3998C12.6956 20.8183 12.0193 20.8183 11.6007 20.3998L7.31381 16.1138C6.8954 15.6953 6.8954 15.0189 7.31381 14.6004C7.7323 14.1818 8.41068 14.1818 8.82923 14.6004L12.3273 18.1262L20.1726 10.3144C20.5912 9.8952 21.2675 9.8952 21.6861 10.3144Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="task3">
                  <div class="task-bg"></div>
                  <div class="category">
                    <div class="bg3"></div>
                    <div class="description">Important</div>
                  </div>
                  <div class="description2">
                    Memorize the fifty states and their capitals
                  </div>
                  <div class="check"></div>
                  <svg
                    class="check-completed3"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#4CAF50" />
                    <path
                      d="M21.6861 10.3144C22.1046 10.733 22.1046 11.4093 21.6861 11.8279L13.1142 20.3998C12.6956 20.8183 12.0193 20.8183 11.6007 20.3998L7.31381 16.1138C6.8954 15.6953 6.8954 15.0189 7.31381 14.6004C7.7323 14.1818 8.41068 14.1818 8.82923 14.6004L12.3273 18.1262L20.1726 10.3144C20.5912 9.8952 21.2675 9.8952 21.6861 10.3144Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="task4">
                  <div class="task-bg"></div>
                  <div class="category">
                    <div class="bg4"></div>
                    <div class="description">Urgent</div>
                  </div>
                  <div class="description2">
                    Memorize the fifty states and their capitals
                  </div>
                  <div class="check"></div>
                  <svg
                    class="check-completed4"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#4CAF50" />
                    <path
                      d="M21.6861 10.3144C22.1046 10.733 22.1046 11.4093 21.6861 11.8279L13.1142 20.3998C12.6956 20.8183 12.0193 20.8183 11.6007 20.3998L7.31381 16.1138C6.8954 15.6953 6.8954 15.0189 7.31381 14.6004C7.7323 14.1818 8.41068 14.1818 8.82923 14.6004L12.3273 18.1262L20.1726 10.3144C20.5912 9.8952 21.2675 9.8952 21.6861 10.3144Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="task5">
                  <div class="task-bg"></div>
                  <div class="category">
                    <div class="bg5"></div>
                    <div class="description">Completed</div>
                  </div>
                  <div class="description2">
                    Memorize the fifty states and their capitals
                  </div>
                  <div class="check"></div>
                  <svg
                    class="check-completed5"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#4CAF50" />
                    <path
                      d="M21.6861 10.3144C22.1046 10.733 22.1046 11.4093 21.6861 11.8279L13.1142 20.3998C12.6956 20.8183 12.0193 20.8183 11.6007 20.3998L7.31381 16.1138C6.8954 15.6953 6.8954 15.0189 7.31381 14.6004C7.7323 14.1818 8.41068 14.1818 8.82923 14.6004L12.3273 18.1262L20.1726 10.3144C20.5912 9.8952 21.2675 9.8952 21.6861 10.3144Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="bg-drop-shadow"></div>
              <div class="bg6"></div>
              <div class="clear-completed-text">Clear completed</div>
              <div class="add-category-btn">
                <div class="bg7"></div>
                <div class="text">Add new task</div>
              </div>
              <div class="tasks-text">5 tasks</div>
            </div>
          </div>
          <div class="left-panel">
            <div class="bg-drop-shadow2"></div>
            <div class="bg8"></div>
            <div class="add-category-button">
              <div class="bg9"></div>
              <div class="text2">Add category</div>
            </div>
            <div class="categories">
              <div class="category2">
                <div class="category-bg"></div>
                <div class="category-text">To study</div>
              </div>
              <div class="category3">
                <div class="category-bg2"></div>
                <div class="category-text">Later</div>
              </div>
              <div class="category4">
                <div class="category-bg3"></div>
                <div class="category-text">Important</div>
              </div>
              <div class="category5">
                <div class="category-bg4"></div>
                <div class="category-text">Urgent</div>
              </div>
              <div class="category6">
                <div class="category-bg5"></div>
                <div class="category-text">Completed</div>
              </div>
            </div>
            <div class="title">
              <div class="right-line"></div>
              <div class="title2">Categories</div>
              <div class="left-line"></div>
            </div>
          </div>
        </div>
        <div class="app-title">
          Personal
          <br />
          Concierge
        </div>
        <svg
          class="moon"
          width="32"
          height="35"
          viewBox="0 0 32 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 17.5C0 7.82812 7.83594 0 17.4844 0C18.3719 0 19.8047 0.130312 20.6797 0.292656C21.4309 0.431484 21.5977 1.43563 20.9359 1.81141C16.6406 4.25781 14 8.79688 14 13.7344C14 22.3047 21.7898 28.8125 30.2734 27.1953C31.0204 27.0543 31.5453 27.9237 31.0633 28.5195C27.8047 32.5469 22.875 35 17.4844 35C7.82031 35 0 27.1562 0 17.5Z"
            fill="#F7ECDE"
          />
        </svg>
      </div>
    );
}

export default HomePage;
