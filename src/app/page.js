"use client";
import { Footer } from "@/components/Footer";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider mt="sm" />

      <Group position="center">
        <Title order={4} mt="sm">
          Elon Musk
        </Title>
        <Rating defaultValue={5} mt="sm" readOnly />
      </Group>
      <Text c="dimmed" ta="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" />

      <Group position="center">
        <Title order={4} mt="sm">
          Mark Zuck
        </Title>
        <Rating defaultValue={4} mt="sm" readOnly />
      </Group>
      <Text c="dimmed" ta="center">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} color="orange" position="center" mt="md" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Rawipa Samhuay 650610801
      </Text>
    </Container>
  );
}
