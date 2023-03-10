import React from "react";
import Header1 from "../../Components/Header1/Header";
import "./Page1.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar";
import UserSection from "../../Components/UserSection1/UserSection";
import StyledTabs from "../../Components/StyledTabs/StyledTabs";
import CategoryCard from "../../Components/Basics/Cards/CategoryCard/CategoryCard";
import TaskDetailsCard from "../../Components/Basics/Cards/TaskDetailsCard/TaskDetailsCard";
import { Box } from "@mui/system";
const Page1 = () => {
  return (
    <div className="Page1">
      <Header1 variant={1} />
      <main>
        <Sidebar1 />
        <UserSection variant={1} />
        <div className="main">
          <StyledTabs>
            <Box
              sx={{
                pr: 4,
                pl: 5,
              }}
            >
              <div className="category-container">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
              </div>
              <div className="category-container">
                <div>
                  <TaskDetailsCard
                    mainImage="https://i.picsum.photos/id/958/200/300.jpg?hmac=oCwv3AFzS5VqZv3nvDJ3H5RzcDH2OiL2g-GGwWL5fsI"
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={[
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                    ]}
                    attachmentCount={4}
                    listCount={2}
                    pendingDays={6}
                  />
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={[
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                      "https://xsgames.co/randomusers/avatar.php?g=male",
                    ]}
                    pendingDays={2}
                  />
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={[
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                      "https://xsgames.co/randomusers/avatar.php?g=male",
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                    ]}
                    pendingDays={2}
                  />
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={["https://xsgames.co/randomusers/avatar.php?g=male"]}
                    pendingDays={2}
                  />
                </div>
                <div>
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={["https://xsgames.co/randomusers/avatar.php?g=male"]}
                    attachmentCount={5}
                    // listCount={3}
                    pendingDays={2}
                  />
                  <TaskDetailsCard
                    mainImage="https://picsum.photos/200/300"
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={[
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                    ]}
                    pendingDays={2}
                  />
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={["https://xsgames.co/randomusers/avatar.php?g=male"]}
                    attachmentCount={5}
                    listCount={3}
                    pendingDays={1}
                  />
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={[
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                    ]}
                    attachmentCount={5}
                    listCount={3}
                    pendingDays={2}
                  />
                </div>
                <div>
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={["https://xsgames.co/randomusers/avatar.php?g=male"]}
                    pendingDays={2}
                  />
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={[
                      "https://xsgames.co/randomusers/avatar.php?g=female",
                    ]}
                    pendingDays={2}
                  />
                </div>
                <div>
                  <TaskDetailsCard
                    title="Make Money Online Through"
                    category="Space Tasks 2"
                    users={["https://xsgames.co/randomusers/avatar.php?g=male"]}
                    pendingDays={6}
                  />
                </div>
              </div>
            </Box>
          </StyledTabs>
        </div>
      </main>
    </div>
  );
};

export default Page1;
