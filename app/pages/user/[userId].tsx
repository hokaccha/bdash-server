import React, { Suspense } from "react"
import { useQuery, useParam, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import getUserById from "app/users/queries/getUserById"
import { Spinner } from "@chakra-ui/react"
import { UserPageContainer } from "app/core/components/UserPageContainer"

const User = () => {
  const id = useParam("userId", "number")
  const [user] = useQuery(getUserById, { id })

  return <UserPageContainer user={user} />
}

const ShowUserPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner color="teal" />}>
      <User />
    </Suspense>
  )
}

ShowUserPage.authenticate = true
ShowUserPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowUserPage
